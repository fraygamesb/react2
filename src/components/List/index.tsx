import styles from "./style.module.css";
import CompetenceCard from "../CompetenceCard";

interface Item {
  id: number;
  name: string;
  description: string;
  skill: number;
}

interface ListProps {
  items: Array<Item>;
  deleteCard: (id: number) => void;
}

const List = ({ items, deleteCard }: ListProps) => {
  return (
    <>
      <div className={styles.container}>
        {items.map((item) => (
          <CompetenceCard
            id={item.id}
            key={item.id}
            name={item.name}
            description={item.description}
            skill={item.skill}
            onClick={deleteCard}
          />
        ))}
      </div>
    </>
  );
};

export default List;
