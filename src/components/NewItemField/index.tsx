import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Item } from "../TodoContainer";
import "./index.css";

interface Props {
  onAddItem: (newItem: Item) => void;
}

const TodoNewItem = ({ onAddItem }: Props) => {
  const [title, setTitle] = useState("");

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
  };

  const addItem = () => {
    onAddItem({
      id: uuidv4(),
      title,
      done: false,
    });
    setTitle("");
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (title && event.code === "Enter") {
      event.preventDefault();
      addItem();
    }
  };

  return (
    <div className="new-item">
      <textarea
        className="new-item-textarea"
        onKeyDown={onKeyDown}
        value={title}
        onChange={onChange}
      />
      <button type="button" onClick={addItem} disabled={!title}>
        New Item
      </button>
    </div>
  );
};

export default TodoNewItem;
