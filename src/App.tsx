import React, { Component } from "react";

type Props = {};

type State = {};

export default class App extends Component<Props, State> {
  state = {};

  render() {
    return (
      <main className="flex flex-col h-screen">
        <h1 className="text-3xl font-sans text-center m-10">Todo App</h1>
        <form className="flex justify-center">
          <div>
            <label htmlFor="todoText" className="sr-only">
              Todo Text
            </label>
            <input type="text" id="todoText" className="rounded-l-md" />
          </div>
          <button type="submit" className="btn rounded-l-none">
            Add Todo
          </button>
        </form>
        <section
          id="todoList"
          className="flex flex-1 flex-col mx-4 my-10 gap-4"
        >
          <div className="flex items-center">
            <div>
              <label htmlFor="isCompleted" className="sr-only">
                Is Completed
              </label>
              <input type="checkbox" name="completed" id="isCompleted" />
            </div>
            <p className="flex-1 px-4">Lorem ipsum dolor sit amet.</p>
            <button type="button" className="btn">
              Delete
            </button>
          </div>
          <div className="flex items-center">
            <div>
              <label htmlFor="isCompleted" className="sr-only">
                Is Completed
              </label>
              <input type="checkbox" name="completed" id="isCompleted" />
            </div>
            <p className="flex-1 px-4">Lorem ipsum dolor sit amet.</p>
            <button type="button" className="btn">
              Delete
            </button>
          </div>
          <div className="flex items-center">
            <div>
              <label htmlFor="isCompleted" className="sr-only">
                Is Completed
              </label>
              <input type="checkbox" name="completed" id="isCompleted" />
            </div>
            <p className="flex-1 px-4">Lorem ipsum dolor sit amet.</p>
            <button type="button" className="btn">
              Delete
            </button>
          </div>
        </section>
        <section className="flex">
          <button type="button" className="btn flex-1 rounded-none">
            All
          </button>
          <button type="button" className="btn flex-1 rounded-none">
            Pedning
          </button>
          <button type="button" className="btn flex-1 rounded-none">
            Completed
          </button>
        </section>
      </main>
    );
  }
}
