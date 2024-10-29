import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="https://formspree.io/f/mwpkvjed" method="POST">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input classname="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
