import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function SkillList({ icon, skill }) {
  return (
    <span>
      <FontAwesomeIcon icon={icon} />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
