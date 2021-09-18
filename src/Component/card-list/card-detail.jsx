import { useState,useEffect } from "react";
import { useParams,useHistory,Link } from  'react-router-dom'
import GlassesPreloader from '../preloader/Glasses'

/*
so to acces a card detail you need a link  that has a argument called alpha3Code they are short unquie code each Card Has
when we click on a card we use the alpha3Code to genrate the Card detail Content

*/

const CardDetail =(props)=>{
   let { alpha3Code } = useParams();
   let history = useHistory()
   console.log(alpha3Code)

   const GetCountry=(data,alpha3Code)=>{
      //GetCountry get a single Country according to the alphaCode

      return data.filter(country=>country.alpha3Code.includes(alpha3Code))[0]
   }


   const handleGoingBackToMainPage = ()=>{
    history.push('/')
   }

   const Country = GetCountry(props.countries,alpha3Code)
   console.log(Country)
 return (

    <>
            <button className="btn back_button" onClick={()=>handleGoingBackToMainPage()}>
                <i className="fas fa-arrow-left"></i>
                Go Back
            </button>

{props.countries.length ==0 ? <GlassesPreloader /> :

            <section className="detail_section">
                <div className="detail_section__image">
                    <img src={Country.flag} alt="country pics" />
                </div>
             
                <div className="detail_content_container">
                    <h2>{Country.name}</h2>
                    <div className="detail_section__country_info">
                        <div className="detail_section__country_info__section_a">
                            <p><strong>Native Name:</strong> {Country.nativeName}</p>
                            <p><strong>Population:</strong>{Country.population}</p>
                            <p><strong>Region:</strong> {Country.region}</p>
                            <p><strong>Sub Region:</strong>{Country.subregion}</p>
                            <p><strong>Capital:</strong>{Country.capital}</p>
                        </div>

                        <div className="detail_section__country_info__section_b">
                            <p><strong>Top Level Domain:</strong>{Country.topLevelDomain[0].toString()}</p>
                            <p><strong>Currencies:</strong>{Country.currencies.map(data=>data.name).toString()} </p>
                            <p><strong>Languages:</strong> {Country.languages.map(data=>data.name).toString()}</p>
                        </div>

                        <div className="border_countries_section">
                            
                        {/* //    if this country Doesnt have Border Just Display a message */}
                        { Country.borders.length ==0 ?<p style={{'textAlign':'center'}}><strong>{Country.name}</strong> Doesn't Have <strong>Border!</strong></p>:
                         <h4>Border Countries:</h4>
                        }
                           

                        <section>
                            
                           {   

                        
                            // Basically we just map Through the Array Of Borders

                                // Now We Want to get the Current Country Borders Which is an array of
                                // different Country Each_alpha3Code
                               Country.borders.map(Each_alpha3CodeForBorder=>{
                                 let boredCountryObject=  GetCountry(props.countries,Each_alpha3CodeForBorder)
                              
                                return <Link className="btn border_countries__btn" to={`/${boredCountryObject.alpha3Code}`} >{boredCountryObject.name} </ Link>
                              })
                           }
                        </section>
                        </div>
                        <br />
                    </div>
                    
                </div>

            </section>

}

    </>
 )

}



export default CardDetail