import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import LeftBar from "../components/LeftBar/LeftBar";
import TopBar from "../components/TopBar/TopBar";

function PythonLab() {

  const [width,setWidth] = useState(window.innerWidth);

  const handler = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize",handler);
    return () => window.removeEventListener("resize",handler);
  });

  var name = width > 1200 ? "Python Laboratory" : "PYTHON LAB";

  return (
    <>
      <Header name={name} />
      {width > 1200 ? 
        <LeftBar name="Python Laboratory" arr={["Input-Output" ,"DataTypes", "String" ,"Flow Control", "Lists", "Dictionary","Stacks","Queues","Methods-Python","Python-Files","Modules","Classes","Exception Handling","Advanced Functions"]}/>
        :
        <TopBar name="Python Laboratory" arr={["Input-Output" ,"DataTypes", "String" ,"Flow Control", "Lists", "Dictionary","Stacks","Queues","Methods-Python","Python-Files","Modules","Classes","Exception Handling","Advanced Functions"]} />
      }
    </>
  );
}

export default PythonLab;