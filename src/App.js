import React from "react";
import { Homes } from "./components/condition/Homes";
import { Student } from "./components/CssReact/Student";
import { Events } from "./components/eventHandler/Events";
import Userform from "./components/formhandle/Userform";
import Hoc from "./components/highordercomponent/Hoc";
import StudentProps from "./components/props/StudentProps";
import Insideconst from "./components/states/Insideconst";
import Userstudent from "./components/states/Userstudent";

function App() {
  return (
    <div className="">
      {/* <Student/> */}
      {/* <StudentProps name="Pritam" phone="9988956269" email="pritam@gmail.com" roll="20" exp={20+20}/> */}
      {/* <Events/> */}
      {/* <Homes name="Pritam"/> */}

      {/* <Hoc/> */}
      {/* <Userstudent /> */}
      {/* <Insideconst city="kolkata"/> */}
      <Userform/>



    </div>
  );
}

export default App;
