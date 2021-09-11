import Card from './card'
import Loader from '../searchLoader.gif'

const CardList = (props)=>{
    console.log(props.countriesData === [])
    return (
        <section className="section_b" style={{position:'relative'}}>
            {/* <!-- secttion b consist of a list of countries --> */}

           {
               props.countriesData.length !== 0?
            
              props.countriesData.map(data=>{

                    return (
                            <Card  data={data}/>
                    )
               }):<div className="Loading">
                   <img src={Loader} alt="" />
               </div>
           }


        
    </section>
    )
}

export default CardList