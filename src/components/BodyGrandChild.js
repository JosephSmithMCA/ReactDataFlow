

function BodyGrandChild({Adder}){


    return(
        <div className="container">
            <div className="row text-center text-warning">
                <h6>Im the Body's grandchild</h6>
                <button onClick={Adder}>Add</button>
            </div>
        </div>
    )
}


export default BodyGrandChild