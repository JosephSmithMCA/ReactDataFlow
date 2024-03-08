import BodyGrandChild from './BodyGrandChild'
import BodyGrandChildTwo from './BodyGrandChildTwo'

function BodyChildTwo({bigNum}){


    return(
        <div className="container">
            <div className="row text-center text-info">
                <h3>Im the Body's second child</h3>
                <h3>{bigNum}</h3>
            </div>
            <div className="row">
                <div className="col-sm-6">

                </div>
                <div className="col-sm-6">

                </div>
            </div>
        </div>
    )
}


export default BodyChildTwo