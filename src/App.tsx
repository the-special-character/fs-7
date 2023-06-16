import React, { useRef, useState, useCallback, useMemo } from "react";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import TodoFilter from "./components/todoFilter";

export enum FilterType {
  all = "all",
  pending = "pending",
  completed = "completed",
}

export type TodoItemType = {
  id: number;
  text: string;
  isDone: boolean;
};

type State = {
  todoList: TodoItemType[];
  filterType: FilterType;
};

const App = () => {
  const [todoList, setTodoList] = useState<TodoItemType[]>([]);
  const [filterType, setFilterType] = useState(FilterType.all);

  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputEle = inputRef.current;
    if (inputEle) {
      const todoText = inputEle.value;
      setTodoList((val) => {
        return [
          ...val,
          { id: new Date().valueOf(), text: todoText, isDone: false },
        ];
      });
      inputEle.value = "";
    }
  }, []);

  const updateTodo = useCallback((x: TodoItemType) => {
    setTodoList((val) => {
      const index = val.findIndex((item) => item.id === x.id);
      return [
        ...val.slice(0, index),
        { ...val[index], isDone: !x.isDone },
        ...val.slice(index + 1),
      ];
    });
  }, []);

  const deleteTodo = useCallback((x: TodoItemType) => {
    setTodoList((val) => {
      const index = val.findIndex((item) => item.id === x.id);
      return [...val.slice(0, index), ...val.slice(index + 1)];
    });
  }, []);

  const chnageFilterType = useCallback((filterType: FilterType) => {
    setFilterType(filterType);
  }, []);

  const btns = useMemo(
    () => [
      { value: FilterType.all, text: "All" },
      { value: FilterType.pending, text: "Pending" },
      { value: FilterType.completed, text: "Completed" },
    ],
    []
  );

  return (
    <main className="flex flex-col h-screen">
      <h1 className="text-3xl font-sans text-center m-10">Todo App</h1>
      <TodoForm addTodo={addTodo} ref={inputRef} />
      <TodoList
        todoList={todoList}
        filterType={filterType}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
      <TodoFilter chnageFilterType={chnageFilterType} btns={btns} />
    </main>
  );
};

export default App;

// export default class App extends PureComponent<Props, State> {
//   state = {
//     todoList: [],
//     filterType: FilterType.all,
//   };

//   inputRef = createRef<HTMLInputElement>();

//   addTodo = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const inputEle = this.inputRef.current;
//     if (inputEle) {
//       this.setState(
//         ({ todoList }: State) => {
//           const todoText = inputEle.value;
//           return {
//             todoList: [
//               ...todoList,
//               { id: new Date().valueOf(), text: todoText, isDone: false },
//             ],
//           };
//         },
//         () => {
//           inputEle.value = "";
//         }
//       );
//     }
//   };

//   updateTodo = (x: TodoItemType) => {
//     this.setState(({ todoList }) => {
//       const index = todoList.findIndex((item) => item.id === x.id);
//       return {
//         todoList: [
//           ...todoList.slice(0, index),
//           { ...todoList[index], isDone: !x.isDone },
//           ...todoList.slice(index + 1),
//         ],
//       };
//     });
//   };

//   deleteTodo = (x: TodoItemType) => {
//     this.setState(({ todoList }) => {
//       const index = todoList.findIndex((item) => item.id === x.id);
//       return {
//         todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
//       };
//     });
//   };

//   chnageFilterType = (filterType: FilterType) => {
//     this.setState({ filterType });
//   };

//   render() {
//     const { todoList, filterType } = this.state;
//     console.log("redner app");

//     return (
//       <main className="flex flex-col h-screen">
//         <h1 className="text-3xl font-sans text-center m-10">Todo App</h1>
//         <TodoForm addTodo={this.addTodo} ref={this.inputRef} />
//         <TodoList
//           todoList={todoList}
//           filterType={filterType}
//           updateTodo={this.updateTodo}
//           deleteTodo={this.deleteTodo}
//         />
//         <TodoFilter chnageFilterType={this.chnageFilterType} />
//       </main>
//     );
//   }
// }
