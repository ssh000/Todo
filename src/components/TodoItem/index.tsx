import { ChangeEvent, memo } from "react";
import { Item, onItemChange } from "../TodoContainer";
import "./index.css";

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
      <div className="todo-item" data-testid="todo-item">
        <label className="todo-item-checkbox">
          <input
            data-testid="todo-item-checkbox"
            type="checkbox"
            checked={done}
            onChange={onDoneChange}
          />
        </label>
        <input
          data-testid="todo-item-input"
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
