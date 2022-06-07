import { ChangeEvent, memo } from "react";
import { Item, onItemChange } from "./TodoContainer";
import "./TodoItem.css";

type Props = Item & { onChange: onItemChange };

const TodoItem = memo(
  ({ id, title, done, onChange }: Props) => {
    const onDoneChange = () => {
      onChange(id, { done: !done });
    };

    const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange(id, { title: event.target.value });
    };

    return (
      <div className="todo-item">
        <label className="todo-item-checkbox">
          <input type="checkbox" checked={done} onChange={onDoneChange} />
        </label>
        <input
          className="todo-item-title"
          type="input"
          value={title}
          onChange={onTitleChange}
        />
      </div>
    );
  },
  (prev, next) =>
    prev.done === next.done && prev.title === next.title && prev.id === next.id
);

export default TodoItem;
