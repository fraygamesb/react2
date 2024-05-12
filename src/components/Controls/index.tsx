import styles from "./style.module.css";
import Button from "../Button";
import { Filter } from "../../App.tsx";

interface ControlsProps {
  hide: boolean;
  toggle: () => void;
  onFilter: (filter: Filter | null) => void;
}

const Controls = ({ hide, onFilter, toggle }: ControlsProps) => {
  return (
    <div className={styles.container}>
      <Button onClick={toggle}>
        {hide ? "Показать карточки" : "Скрыть карточки"}
      </Button>
      <Button onClick={() => onFilter({ more: true })}>Больше 50%</Button>
      <Button onClick={() => onFilter({ more: false })}>Меньше 50%</Button>
      <Button onClick={() => onFilter(null)}>Сбросить фильтр</Button>
    </div>
  );
};

export default Controls;
