import { forwardRef, memo } from "react";

type Props = {
  addTodo: (event: React.FormEvent<HTMLFormElement>) => void;
};

const TodoForm = memo(
  forwardRef<HTMLInputElement, Props>(({ addTodo }, ref) => {
    console.log("redner TodoForm");
    return (
      <form className="flex justify-center" onSubmit={addTodo}>
        <div>
          <label htmlFor="todoText" className="sr-only">
            Todo Text
          </label>
          <input ref={ref} type="text" id="todoText" className="rounded-l-md" />
        </div>
        <button type="submit" className="btn rounded-l-none">
          Add Todo
        </button>
      </form>
    );
  })
);

export default TodoForm;
