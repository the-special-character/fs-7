import React, { createContext } from "react";

const TextContext = createContext("");

const TextProvider = ({ children }) => {
  const [text, setText] = useState("");

  const value = useMemo(
    () => ({
      text,
      setText,
    }),
    [text]
  );

  return <TextContext.Provider value={value}>{children}</TextContext.Provider>;
};
