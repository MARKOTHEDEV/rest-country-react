import { Link } from "react-router-dom";

const Card = ({data})=>{
    
    return(
    
    <Link to={data.alpha3Code} className="card" >
        <div >
            <img src={data.flag} />
            <div className="card_content">
                <h2>{data.name}</h2>
                <p><strong>Population</strong>:{data.population}</p>
                <p><strong>Region</strong>: {data.region}</p>
                <p><strong>Capital</strong>: {data.capital}</p>
            </div>
        </div>
    </Link>)
}


export default Card