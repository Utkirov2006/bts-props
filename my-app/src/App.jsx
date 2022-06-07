import Cards from "./components/Cards"
import { useState } from "react"

import rasm from "./assets/images/bts.jpg";
import rasm1 from "./assets/images/bts1.jpg";
import rasm2 from "./assets/images/bts2.jpg";
import rasm3 from "./assets/images/bts3.jpg";

export default function App() {

  const [number, setNumber] = useState(0);
  const [toogle, setToggle] = useState(true);

  console.log(toogle);

  function addToggle() {
    setToggle((e) => !e)
  }



  function Plus() {
    setNumber(number + 1)

  }

  function Clear() {
    setNumber(0);

  }
  function Minus() {
    setNumber(number - 1)

  }
  return (
    <div>

      <h2>{toogle ? "Hello Vue.js" : "Not Found"}</h2>

      <button className="btns" onClick={addToggle}>Toggle</button>

      <button className="btns" onClick={Plus}>Plus</button>
      <button className="btns" onClick={Clear}>Clear</button>
      <button className="btns" onClick={Minus}>minus</button>

      <div className="num">{number}</div>



      <Cards name="Kim tae hyung" job="musician" num={number} img={rasm} show={toogle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Cards>

      <Cards name="Junkok" job="businessman" num={number} img={rasm1} show={toogle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.

      </Cards>

      <Cards name="kiy olin" job="musician" num={number} img={rasm2} show={toogle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.

      </Cards>

      <Cards name="seokjin" job="singer" num={number} img={rasm3} show={toogle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.

      </Cards>




    </div>


  )
}