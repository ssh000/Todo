import TodoItem from "../TodoItem";
import { Item, onItemChange } from "../TodoContainer";

interface Props {
  items: Item[];
  onItemChange: onItemChange;
}

const TodoList = ({ items, onItemChange }: Props) => {
  return (
    <div className="todo-list">
      {items.map((item) => (
        <TodoItem
          key={item.id}
          onChange={onItemChange}
          id={item.id}
          title={item.title}
          done={item.done}
        />
      ))}
    </div>
  );
};

export default TodoList;
