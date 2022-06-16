import React from "react";
import { Homes } from "./components/condition/Homes";
import { Student } from "./components/CssReact/Student";
import { Events } from "./components/eventHandler/Events";
import Userform from "./components/formhandle/Userform";
import Hoc from "./components/highordercomponent/Hoc";
import StudentProps from "./components/props/StudentProps";
import Insideconst from "./components/states/Insideconst";
import Userstudent from "./components/states/Userstudent";
import { Navbar } from "./Routerss/Layouts.jsx/Navbar";
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Home } from "./Routerss/Home";
import About from "./Routerss/About";
import { Footer } from "./Routerss/Layouts.jsx/Footer";
import { Service } from "./Routerss/Service";
import { NotFound } from "./Routerss/NotFound";
import { Menu } from "./Routerss/menu/Menu";
import ListKey from "./components/listKey/ListKey";
import { Form } from "./components/mui/Form";
import { Counter } from "./components/useState/Counter";
import { UseStateex1 } from "./components/useState/UseStateex1";
import { ToggleData } from "./components/useState/ToggleData";
import { Example2 } from "./components/useState/Example2";
import Timer from "./components/useEffect/Timer";
import FetchapiData from "./components/useEffect/FetchapiData";
import ParamsRoute from "./paramRoutes/ParamsRoute";
import ReducerCount from "./ReducerHooks/ReducerCount";
import ReducerApiCall from "./ReducerHooks/ReducerApiCall";
// import Memo from "./Memoreact/Memo";

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
      {/* <Userform/> */}
      
      {/* <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/service" element={<Service/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Router> */}

        {/* <ListKey/> */}
        {/* <Memo/> */}
      {/* <Form/> */}
      {/* <Counter/> */}
      {/* <UseStateex1/> */}
      {/* <ToggleData/> */}
      {/* <Example2/> */}
      {/* <Timer/> */}
      {/* <FetchapiData/> */}
      {/* <ParamsRoute/> */}
      {/* <ReducerCount/> */}
      <ReducerApiCall/>

    </div>
  );
}

export default App;
