import React from "react";
import Header from './components/Header';
import Body from './components/Body'

function App(){
    const [isShown, setIsShown] = React.useState(false)
    const [name, setName] = React.useState('Joseph')


    function toggleShown(){
        setIsShown(prevIsShown => !prevIsShown)
    }

    return(
        <div className="container">
            <div className="row text-center text-muted">
                <h1>Hello Dataflow, I am your Ancestor</h1>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <Header name = {name} isShown = {isShown}/>
                </div>
                <div className="col-sm-6">
                    <Body toggle = {toggleShown}/>
                </div>
            </div>
        </div>
    )
}


export default App