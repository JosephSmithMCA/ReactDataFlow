

function HeaderChild({name , isShown}){


    return(
        <div className="container">
            <div className="row text-center text-danger">
                <h3>Im the Header's first child {isShown ? name : ""}</h3>
            </div>
        </div>
    )
}


export default HeaderChild