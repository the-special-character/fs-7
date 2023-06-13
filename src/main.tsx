import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Mounting

// -> Constructor(call only Once) (initialize of state base on props)
// -> getDerivedStateFromProps(static) (update state value base on props and state)
// -> render (render HTML)
// -> componentDidMount(call only Once)(API Call/event register/DOM manipulation)

// Updating
// -> getDerivedStateFromProps(static)
// -> shouldComponentUpdate (imrove Performace)
// -> render
// -> getSnapShotBeforeUpdate (calculate DOM)(not possible in function component)
// -> componentDidUpdate (DOM manipulation)

// UnMounting
// -> componentWillUnmount (cancel async calls)

// Error (not possible in function component)
// -> getDerivedStateFromError(static) (display error)
// -> componentDidCatch (log error)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
