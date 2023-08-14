import React from "react";
import Button from "./components/first";
import Clickbutton from "./components/sixth";
import Buttontwo from "./components/second";
import Visiblebutton from "./components/fourth";

class App extends React.Component{
  render(){
    return <>
    <Button/>
    <Buttontwo/>
    <Clickbutton/>
    <Visiblebutton/>
    </>
  }
}

export default App