import { useState, useMemo } from "react";
import List from "./components/List";
import Controls from "./components/Controls";
import CreateCard from "./components/CreateCard";

export interface Filter {
  more: boolean;
}

export interface Competence {
  id: number;
  name: string;
  description: string;
  skill: number;
}

function App() {
  const [competenceList, setCompetenceList] = useState([
    { id: 0, name: "HTML", description: "Макс Кабиров", skill: 100 },
    { id: 1, name: "HTML", description: "Макс Кабиров", skill: 100 },
    { id: 2, name: "HTML", description: "Макс Кабиров", skill: 45 },
    { id: 3, name: "HTML", description: "Макс Кабиров", skill: 45 },
  ]);
  const [hide, setHide] = useState(true);
  const [filter, setFilter] = useState<Filter | null>({ more: true });

  const deleteCard = (id: number) => {
    setCompetenceList(competenceList.filter((c) => c.id !== id));
  };

  const filtredCompetenceList = useMemo(
    () =>
      competenceList.filter((c) => {
        if (!filter) return true;
        if (filter.more) return c.skill > 50;
        return c.skill < 50;
      }),
    [competenceList, filter]
  );

  const onFilter = (filter: Filter | null) => {
    setFilter(filter);
  };

  const toggle = () => {
    setHide(!hide);
  };

  const create = (comptence: Competence) => {
    setCompetenceList([...competenceList, comptence]);
  };

  return (
    <>
      <Controls hide={hide} toggle={toggle} onFilter={onFilter} />
      {!hide && <List items={filtredCompetenceList} deleteCard={deleteCard} />}
      <CreateCard create={create} />
    </>
  );
}

export default App;
