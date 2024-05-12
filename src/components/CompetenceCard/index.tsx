import styles from "./style.module.css";
import Button from "../Button";

interface CompetenceCardProps {
  id: number;
  name: string;
  skill: number;
  description: string;
  onClick: (id: number) => void;
}

const CompetenceCard = ({
  id,
  name,
  skill,
  description,
  onClick,
}: CompetenceCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.skill}>{skill} %</p>
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>{description}</p>
      </div>
      <Button onClick={() => onClick(id)}>Удалить</Button>
    </div>
  );
};

export default CompetenceCard;
