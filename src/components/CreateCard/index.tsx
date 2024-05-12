import { useMemo, useState } from "react";
import Button from "../Button";
import styles from "./style.module.css";
import { Competence } from "../../App";

interface CreateCardProps {
  create: (comptence: Competence) => void;
}

const CreateCard = ({ create }: CreateCardProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [skill, setSkill] = useState("");

  const onClick = () => {
    create({ name, description, skill: +skill, id: Number(new Date()) });
  };
  const enabled = useMemo(
    () => name.length && description.length && skill,
    [name, description, skill]
  );
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Название компетенции"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Описание"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Процент освоения"
        value={skill}
        onChange={(event) => setSkill(event.target.value)}
      />
      <Button onClick={onClick} disabled={!enabled}>
        Создать
      </Button>
    </div>
  );
};

export default CreateCard;
