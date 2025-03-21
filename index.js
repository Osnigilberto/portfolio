import arcjet, { fixedWindow } from '@arcjet/node';
import express from 'express';

const app = express();
const port = 3000;

const aj = arcjet({
  // Get your site key from https://app.arcjet.com and set it as an environment
  // variable rather than hard coding.
  key: process.env.ARCJET_KEY,
  characteristics: ['ip.src'], // Track requests by IP
  rules: [
    // Shield protects your app from common attacks e.g. SQL injection
    shield({ mode: 'LIVE' }),
    // Create a bot detection rule
    detectBot({
      mode: 'LIVE', // Blocks requests. Use "DRY_RUN" to log only
      // Block all bots except search engine crawlers. See
      // https://arcjet.com/bot-list
      allow: ['CATEGORY:SEARCH_ENGINE'],
    }),
    // Create a token bucket rate limit. Other algorithms are supported.
    tokenBucket({
      mode: 'LIVE',
      refillRate: 5, // Refill 5 tokens per interval
      interval: 10, // Refill every 10 seconds
      capacity: 10, // Bucket capacity of 10 tokens
    }),
  ],
});

app.get('/', async (req, res) => {
  const decision = await aj.protect(req, { requested: 5 }); // Deduct 5 tokens from the bucket
  console.log('Arcjet decision', decision);

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      res.writeHead(429, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Too Many Requests' }));
    } else if (decision.reason.isBot()) {
      res.writeHead(403, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'No bots allowed' }));
    } else {
      res.writeHead(403, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Forbidden' }));
    }
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello World' }));
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
