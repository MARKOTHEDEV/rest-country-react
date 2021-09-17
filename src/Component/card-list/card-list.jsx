import Card from './card'
import GlassesPreloader from '../preloader/Glasses'

const CardList = (props)=>{
    console.log(props.countriesData === [])
    return (
        <section className="section_b" style={{position:'relative'}}>
            {/* <!-- secttion b consist of a list of countries --> */}

           {
               props.countriesData.length !== 0?
            
              props.countriesData.map(data=>{

                    return (
                            <Card  data={data}  />
                    )
               }):<GlassesPreloader/>
           }


        
    </section>
    )
}

export default CardList