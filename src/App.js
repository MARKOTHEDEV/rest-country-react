import { Component } from 'react'
import Nav from './Component/nav/nav'
import CardList from './Component/card-list/card-list'
import Search from './Component/searchInput/search'



class App extends Component{


    constructor(){
        super()

        this.state={
            countries:[
                {
                    name:'Afganistan',
                    population:'10,2300',
                    region:'africa',
                    capital:'Kabul',
                },
                {
                    name:'Nigeria',
                    population:'1,2300',
                    region:'africa',
                    capital:'lagos',
                },
                {
                    name:'New york',
                    population:'10,2300',
                    region:'united state',
                    capital:'Kabul',
                },
                ],
            searchResult:[],
            search:'',
        }
    }

    
    
    
  buildTheme = ()=>{
    // this will just use the local storage to persist the theme the user chooses
    const htmlTag = document.querySelector('html');
    // console.log(localStorage.getItem('theme-mode'))

    if(localStorage){

        localStorage.getItem('theme-mode',htmlTag.getAttribute('theme-mode'))
    }
    else{
        localStorage.setItem('theme-mode',htmlTag.getAttribute('theme-mode'))
      }

      htmlTag.setAttribute('theme-mode',localStorage.getItem('theme-mode'));
  }

  filterByCountries=(text)=>{
    // this updates the searchResult State it activated by the search Bar
     
    this.setState({searchResult:this.state.countries.filter(countriesData=>countriesData.name.includes(text))}) 
  }

  filterByRegion=(text)=>{
    // this updates the searchResult State it activated by the search Bar
     this.setState({searchResult:this.state.countries.filter(countriesData=>countriesData.region.includes(text))}) 
  }

  componentDidMount(){
    this.buildTheme()

    this.setState({searchResult:[...this.state.countries]})

  }

  getListOfRegions =()=>{
    //   this method returns the regions and remove duplicates from it
    const regions =  new Set(this.state.countries.map(data=>data.region))
    // console.log(regions)
    return  Array.from(regions).map(data=><option value={data}>{data}</option>)
    }

    render(){
        

      return (



<>
<div className="container">
  {/* nav component starts */}
        <Nav />
  {/* nav component end */}


        <main className="main_content_area">
            <section className="section_a">
                {/* <!-- section a consisit of the search bar and the select Button --> */}
                <Search   placeholder={"Search for a country..."} filterByCountries={this.filterByCountries}/>
              
                <div className="myselect_box">
                    <select onChange={e=> this.filterByRegion(e.target.value)}>
                        <option value="">Filter by Region</option>
                        {this.getListOfRegions()}
                    </select>
                    {/* <!-- <div className="arrow_down"></div> --> */}
                    <i className="fas fa-caret-down arrow_down"></i>
                </div>
            
            </section>
            <br /><br />
            {/* {this.state.searchResult ===[] ?<p>dkdk</p>:<h1 style={{"text-align":"center"}} className="text">Please use the Filter by Region or search Box to Find More Targeted Results</h1>}*/}
            <CardList countriesData={this.state.searchResult}/>
        </main>
    </div>
</>
      )
    }


  }


export default App;



