import { Component } from 'react'
import Nav from './Component/nav/nav'


class App extends Component{



  
  buildTheme = ()=>{
    // this will just use the local storage to persist the theme the user chooses
    const htmlTag = document.querySelector('html');
    // console.log(localStorage.getItem('theme-mode'))

    if(localStorage){

        localStorage.setItem('theme-mode',htmlTag.getAttribute('theme-mode'))
    }
    else{
        localStorage.setItem('theme-mode',htmlTag.getAttribute('theme-mode'))
      }

      htmlTag.setAttribute('theme-mode',localStorage.getItem('theme-mode'));
  }

  componentDidMount(){
    this.buildTheme()

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
                <input type="text" className="search" placeholder="Search for a country..." />
          
                <div className="myselect_box">
                    <select >
                        <option value="">Filter by Region</option>
                        <option value="">Africa</option>
                        <option value="">Europe</option>
                        <option value="">Oceania</option>
                    </select>
                    {/* <!-- <div className="arrow_down"></div> --> */}
                    <i className="fas fa-caret-down arrow_down"></i>
                </div>
            </section>
            <br /><br />

            <section className="section_b">
                {/* <!-- secttion b consist of a list of countries --> */}

                <a href="detail.html" className="card">
                    <div >
                        <img src="./afg.svg" />
                        <div className="card_content">
                            <h2>Afghanistan</h2>
                            <p><strong>Population</strong>: 27,657,145</p>
                            <p><strong>Region</strong>: Asia</p>
                            <p><strong>Capital</strong>: Kabul</p>
                        </div>
                    </div>
    
                </a>

                <a href="" className="card">
                    <div >
                        <img src="./afg.svg" />
                        <div className="card_content">
                            <h2>Afghanistan</h2>
                            <p><strong>Population</strong>: 27,657,145</p>
                            <p><strong>Region</strong>: Asia</p>
                            <p><strong>Capital</strong>: Kabul</p>
                        </div>
                    </div>
    
                </a>

                <a href="" className="card">
                    <div >
                        <img src="./afg.svg" />
                        <div className="card_content">
                            <h2>Afghanistan</h2>
                            <p><strong>Population</strong>: 27,657,145</p>
                            <p><strong>Region</strong>: Asia</p>
                            <p><strong>Capital</strong>: Kabul</p>
                        </div>
                    </div>
    
                </a>

                <a href="" className="card">
                    <div >
                        <img src="./afg.svg" />
                        <div className="card_content">
                            <h2>Afghanistan</h2>
                            <p><strong>Population</strong>: 27,657,145</p>
                            <p><strong>Region</strong>: Asia</p>
                            <p><strong>Capital</strong>: Kabul</p>
                        </div>
                    </div>
    
                </a>

                <a href="" className="card">
                    <div >
                        <img src="./afg.svg" />
                        <div className="card_content">
                            <h2>Afghanistan</h2>
                            <p><strong>Population</strong>: 27,657,145</p>
                            <p><strong>Region</strong>: Asia</p>
                            <p><strong>Capital</strong>: Kabul</p>
                        </div>
                    </div>
    
                </a>

                
            </section>
        </main>
    </div>
</>
      )
    }


  }


export default App;



