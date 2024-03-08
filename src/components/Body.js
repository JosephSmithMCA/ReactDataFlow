import React from 'react'
import BodyChild from './BodyChild'
import BodyChildTwo from './BodyChildTwo'

function Body({toggle}){
    //this is destructing
    //literally the same as props
    const [countUp, setCountUp] = React.useState(0)

    function Add(){

        setCountUp(prevCountUp => prevCountUp + 1)
    }

    return(
        <div className="container">
            <div className="row text-center">
                <h1>Im the Body</h1>
                {/* <h3>{number}</h3> */}
                

            </div>
            <div className="row">
                <div className="col-sm-6">
                    <BodyChild Adder = {Add} toggle = {toggle}/>
                </div>
                <div className="col-sm-6">
                    <BodyChildTwo bigNum = {countUp}/>
                </div>
            </div>
        </div>
    )
}


export default Body