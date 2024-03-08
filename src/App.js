import React from "react";
import Header from './components/Header';
import Body from './components/Body'

function App(){
    

    return(
        <div className="container">
            <div className="row text-center text-muted">
                <h1>Hello Dataflow, I am your Ancestor</h1>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <Header/>
                </div>
                <div className="col-sm-6">
                    <Body/>
                </div>
            </div>
        </div>
    )
}


export default App