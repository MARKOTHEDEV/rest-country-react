import Card from './card'


const CardList = (props)=>{

    return (
        <section className="section_b">
            {/* <!-- secttion b consist of a list of countries --> */}

           {
              props.countriesData.map(data=>{

                    return (
                            <Card  data={data}/>
                    )
               })
           }

        
    </section>
    )
}

export default CardList