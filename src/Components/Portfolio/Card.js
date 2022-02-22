

function Card (props){
    const {src, alt, title, details, href} = props;
    return(
        <div className="card">
            <div className="p__img--container">
                <img src = {src} alt = {alt}></img>                
            </div>
            <div className="p__details">
                <label>{title}</label>
                <p>{details}</p>
                <a href={href}><button>Demo</button></a>
            </div>
        </div>
    )
}


export default Card;