import React, { Children, useEffect, useState } from "react";
import { createContext } from "react";
export const DataContext = createContext();

function ProviderContext({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((p) => setData(p));
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export default ProviderContext;
