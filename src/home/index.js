import style from "./style";
import { useState } from "preact/hooks";
require("../webcomponents/my-webcomponent");

const Home = () => {
  const [headline, setHeadline] = useState("First headline");
  return (
    <div>
      <div class={style.home}>
        <my-headline label={headline}></my-headline>
      </div>
      <button onClick={() => setHeadline("Changed")}>change headline</button>
    </div>
  );
};

export default Home;
