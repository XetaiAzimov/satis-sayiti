import React, { useContext } from "react";
import { DataContext } from "../Context/ProviderContext";

function Home() {
  const posts = useContext(DataContext);
//   console.log(posts);

  return <div>
      <div className="home">
        <h1>Centered Hero</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, non.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum praesentium odio doloremque ea!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate.
          Lorem ipsum dolor sit.</p>
          <div className="link"><a>Primary button</a><a>Secondary</a></div>
          <div className="tt">
            <p>Home</p>
            <p>About</p>
            <p>Products</p>
            <p>Contact</p>
          </div>
      </div>
    </div>;
}

export default Home;
