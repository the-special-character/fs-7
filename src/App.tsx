import React, { Component, createRef } from "react";
import clsx from "clsx";

type Props = {};

enum FilterType {
  all = "all",
  pending = "pending",
  completed = "completed",
}

type TodoItem = {
  id: number;
  text: string;
  isDone: boolean;
};

type State = {
  todoList: TodoItem[];
  filterType: FilterType;
};

export default class App extends Component<Props, State> {
  state = {
    todoList: [],
    filterType: FilterType.all,
  };

  inputRef = createRef<HTMLInputElement>();

  // changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event.target.value);
  //   this.setState({ todoText: event.target.value });
  // };

  addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputEle = this.inputRef.current;
    if (inputEle) {
      this.setState(
        ({ todoList }: State) => {
          const todoText = inputEle.value;
          return {
            todoList: [
              ...todoList,
              { id: new Date().valueOf(), text: todoText, isDone: false },
            ],
          };
        },
        () => {
          inputEle.value = "";
        }
      );
    }
  };

  updateTodo = (x: TodoItem) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((item) => item.id === x.id);
      return {
        todoList: [
          ...todoList.slice(0, index),
          { ...todoList[index], isDone: !x.isDone },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  deleteTodo = (x: TodoItem) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((item) => item.id === x.id);
      return {
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      };
    });
  };

  chnageFilterType = (filterType: FilterType) => {
    this.setState({ filterType });
  };

  render() {
    const { todoList, filterType } = this.state;
    return (
      <main className="flex flex-col h-screen">
        <h1 className="text-3xl font-sans text-center m-10">Todo App</h1>
        <form className="flex justify-center" onSubmit={this.addTodo}>
          <div>
            <label htmlFor="todoText" className="sr-only">
              Todo Text
            </label>
            <input
              ref={this.inputRef}
              type="text"
              id="todoText"
              className="rounded-l-md"
              // value={todoText}
              // onChange={this.changeText}
            />
          </div>
          <button type="submit" className="btn rounded-l-none">
            Add Todo
          </button>
        </form>
        <section
          id="todoList"
          className="flex flex-1 flex-col mx-4 my-10 gap-4"
        >
          {todoList
            // .filter((x: TodoItem) => {
            //   if (filterType === FilterType.pending) {
            //     return !x.isDone;
            //   } else if (filterType === FilterType.completed) {
            //     return x.isDone;
            //   } else {
            //     return true;
            //   }
            // })
            .map((x: TodoItem) => {
              if (
                filterType === FilterType.all ||
                (filterType === FilterType.pending && !x.isDone) ||
                (filterType === FilterType.completed && x.isDone)
              ) {
                return (
                  <div key={x.id} className="flex items-center">
                    <div>
                      <label htmlFor="isCompleted" className="sr-only">
                        Is Completed
                      </label>
                      <input
                        type="checkbox"
                        name="completed"
                        id="isCompleted"
                        checked={x.isDone}
                        onChange={() => this.updateTodo(x)}
                      />
                    </div>
                    <p
                      className={clsx("flex-1 px-4", {
                        "line-through": x.isDone,
                      })}
                      // style={{
                      //   textDecoration: x.isDone ? "line-through" : "none",
                      // }}
                    >
                      {x.text}
                    </p>
                    <button
                      type="button"
                      className="btn"
                      onClick={() => this.deleteTodo(x)}
                    >
                      Delete
                    </button>
                  </div>
                );
              }
              return null;
            })}
        </section>
        <section className="flex">
          <button
            type="button"
            className="btn flex-1 rounded-none"
            onClick={() => this.chnageFilterType(FilterType.all)}
          >
            All
          </button>
          <button
            type="button"
            className="btn flex-1 rounded-none"
            onClick={() => this.chnageFilterType(FilterType.pending)}
          >
            Pedning
          </button>
          <button
            type="button"
            className="btn flex-1 rounded-none"
            onClick={() => this.chnageFilterType(FilterType.completed)}
          >
            Completed
          </button>
        </section>
      </main>
    );
  }
}
