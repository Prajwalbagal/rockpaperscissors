
import React, { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/Game';
import Play from './components/Play';
import { Route,Switch } from "react-router-dom";
const App=()=>{
 const [score,setScore]= useState(0);
 const [myChoice,setMyChoice]=useState("");

return(
  <>
  <div className="container">
    <Header score={score}/>
    <Switch>
    <Route exact path="/">
        <Play setMyChoice={setMyChoice}/>
    </Route>
    <Route exact path="/game">
        <Game score={score} myChoice={myChoice} setScore={setScore}/>
    </Route>
    </Switch>
  </div>
  <Footer/>
  </>
)
}


export default App;
