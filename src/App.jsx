import React  from "react";
import AppRouter from "./AppRouter";
import ProviderContext from "./Context/ProviderContext";

function App() {
  return (
    <div>
      <ProviderContext>
        <AppRouter  />
      </ProviderContext>
    </div>
  );
}

export default App;
