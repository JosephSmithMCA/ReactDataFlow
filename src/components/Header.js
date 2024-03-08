import HeaderChild from './HeaderChild'
import HeaderChildTwo from './HeaderChildTwo'

function Header(){


    return(
        <div className="container">
            <div className="row text-center">
                <h1>Im the Header</h1>
                <div className="col-sm-6">
                    <HeaderChild/>
                </div>
                <div className="col-sm-6">
                    <HeaderChildTwo/>
                </div>
            </div>
        </div>
    )
}


export default Header