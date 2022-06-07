import { useState } from "react";
import TodoList from "./TodoList";

const initialItems = [
  {
    id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    title: "Do that",
    done: false,
  },
  {
    id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
    title: "Do this",
    done: true,
  },
  {
    id: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b",
    title: "Don't forget to rest",
    done: false,
  },
];

export type Item = {
  id: string;
  title: string;
  done: boolean;
};

export type onItemChange = (id: string, value: Partial<Item>) => void;

const TodoListContainer = () => {
  const [items, setItems] = useState<Item[]>(initialItems);

  const onItemChange: onItemChange = (id, value) => {
    setItems((prevState) =>
      prevState.map((item) => (item.id === id ? { ...item, ...value } : item))
    );
  };

  return <TodoList items={items} onItemChange={onItemChange} />;
};

export default TodoListContainer;
