import { Component } from 'react'
import Nav from './Component/nav/nav'
import CardList from './Component/card-list/card-list'
import Search from './Component/searchInput/search'
import CardDetail from './Component/card-list/card-detail'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// alpha3Code

class App extends Component{


    constructor(){
      // here we are Extending all the Methods and Properties of Component to App
        super()

        this.state={
            countries:[],
            searchResult:[],
            search:'',
        }
    }

    
    
   
       

  filterByCountries=(text)=>{
    // this updates the searchResult State it activated by the search Bar
     
    this.setState({searchResult:this.state.countries.filter(countriesData=>countriesData.name.toLowerCase().includes(text.toLowerCase()))}) 
  }

  filterByRegion=(text)=>{
    // this updates the searchResult State it activated by the search Bar
 
     this.setState({searchResult:this.state.countries.filter(countriesData=>countriesData.region.toLowerCase().includes(text.toLowerCase()))}) 
  }
  async getCountriesDataFromTheInternet(url){
    // this is a async funtion that gets all the Data From The Rest Country End Point
     const resp = await fetch(url)
     const respData =await resp.json() 
     return respData
  }
  componentDidMount(){

     this.getCountriesDataFromTheInternet('https://restcountries.eu/rest/v2/all')
     /* 
        The Following Code Gets the country Data From the Endpoint all we do is Store the data in the State

        the first state i use it for a store House Of All the Data
        the Other One Is the Filter Version which is The Search Result -- Initially it will be filled with search data
     */
        .then(countriesData=>{
            // yall already Know what   componentDidMount does am using it behavious to fetch and store the data
            this.setState({countries:[...countriesData].map((data,index)=>{
                //    
                    return {...data,id:index}
                })}) 
                
            this.setState({searchResult:[...this.state.countries]})

        })
    


  }
  
  getListOfRegions =()=>{
      //   this method returns the regions and remove duplicates from it
      const regions =  new Set(this.state.countries.map(data=>data.region))
      // console.log(regions)
      return  Array.from(regions).map((data,index)=><option value={data} key={index}>{data}</option>)
    }

    render(){
        

      return (



        <>
        <Router>
          <div className="container" >
            {/* nav component starts */}
                  <Nav />
            {/* nav component end */}
         

                <main className="main_content_area">
                   <Switch>
                      <Route exact path='/'>
                          <section className="section_a">
                                {/* <!-- section a consisit of the search bar and the select Button --> */}
                                <Search   placeholder={"Search for a country..."} filterByCountries={this.filterByCountries}/>
                              
                                <div className="myselect_box">
                                    <select onChange={e=> this.filterByRegion(e.target.value)}>
                                        <option value="">Filter by Region</option>
                                        {/* the function below gets all the regions*/}
                                        {this.getListOfRegions()}
                                    </select>
                                    {/* <!-- <div className="arrow_down"></div> --> */}
                                    <i className="fas fa-caret-down arrow_down"></i>
                                </div>
                            
                            </section>
                            <br /><br />
                            {/* {this.state.searchResult ===[] ?<p>dkdk</p>:<h1 style={{"text-align":"center"}} className="text">Please use the Filter by Region or search Box to Find More Targeted Results</h1>}*/}
                            <CardList countriesData={this.state.searchResult}/>                  
                      </Route>  
                  
                      <Route exact path="/:alpha3Code">
                            <CardDetail  countries={this.state.countries}/>
                      </Route>
                    </Switch>
               
                </main>
            </div>
        </Router>
        </>
      )
    }


  }


export default App;



