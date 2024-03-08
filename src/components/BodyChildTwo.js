import BodyGrandChild from './BodyGrandChild'
import BodyGrandChildTwo from './BodyGrandChildTwo'

function BodyChildTwo(){


    return(
        <div className="container">
            <div className="row text-center text-info">
                <h3>Im the Body's second child</h3>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <BodyGrandChild/>
                </div>
                <div className="col-sm-6">
                    <BodyGrandChildTwo/>
                </div>
            </div>
        </div>
    )
}


export default BodyChildTwo