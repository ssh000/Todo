import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TodoList from "./index";

const items = [
  { id: "1", title: "not finished task", done: false },
  { id: "2", title: "finished task", done: true },
];

describe("TodoList", () => {
  it("checks that correct amount of items rendered", async () => {
    render(<TodoList items={items} onItemChange={jest.fn()} />);

    expect(await screen.findAllByTestId("todo-item")).toHaveLength(2);
  });

  it("checks that items have correct input values", async () => {
    render(<TodoList items={items} onItemChange={jest.fn()} />);

    const [firstItemInput, secondItemInput] = await screen.findAllByTestId(
      "todo-item-input"
    );

    expect(firstItemInput).toHaveValue(items[0].title);
    expect(secondItemInput).toHaveValue(items[1].title);
  });

  it("checks that items have correct checkbox values", async () => {
    render(<TodoList items={items} onItemChange={jest.fn()} />);

    const [firstItemCheckbox, secondItemCheckbox] =
      await screen.findAllByTestId("todo-item-checkbox");

    expect(firstItemCheckbox).not.toBeChecked();
    expect(secondItemCheckbox).toBeChecked();
  });

  it("checks that checkboxes are editable", async () => {
    const user = userEvent.setup();
    const onItemChange = jest.fn();
    render(<TodoList items={items} onItemChange={onItemChange} />);

    const [firstItemCheckbox] = await screen.findAllByTestId(
      "todo-item-checkbox"
    );
    await user.click(firstItemCheckbox);

    expect(onItemChange).toBeCalledWith("1", { done: true });
  });
});
