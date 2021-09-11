import { useState,useEffect } from "react";




const ModeBtn=(props)=>{
    // this component handles all the Dark and Light Mode Jazz
    
    
    let localstoragetheme;
    let lightMode = 'light-mode'
    let darkMode = 'dark-mode'

    // if there something in the local storage named theme-mode get the theme-mode
    if(localStorage.getItem('theme-mode')){
        localstoragetheme = localStorage.getItem('theme-mode')
    }
    
    if(localstoragetheme == lightMode || localstoragetheme == darkMode){
        localStorage.setItem('theme-mode',localstoragetheme)
        console.log(localstoragetheme,'lo')
        
    }else{
        localStorage.setItem('theme-mode',lightMode)
        
    }

    // what ever the mode is set it to the State Below
    const [theme,setTheme] =useState(localStorage.getItem("theme-mode"));

    
    useEffect(()=>{
        // Only if the "theme"State changes that when the useEffect runs
        // The above comment means when the user click on the component the "theme"State updates and we change the html Attribute 
        let htmlTag = document.querySelector('html');
       
        htmlTag.setAttribute('theme-mode',theme)

    },[theme])

    const ToggleThemeMode=(e)=>{
       
        if(theme === darkMode){
            setTheme(lightMode)
        localStorage.setItem('theme-mode',lightMode)

        }
        else if (theme === lightMode){
            setTheme(darkMode)
        localStorage.setItem('theme-mode',darkMode)

            
        }
    }
  
  
    return(
        <div id="mode_btn"  onClick={(e)=> ToggleThemeMode(e)}>
        {theme.includes('light-mode')==true?( <div className="light_mode icon">
                     Light Mode
                 
                     <i className="fas  fa-sun"></i>    
                 </div>):(
                    <div className="dark_mode">
            
                    Dark Mode
                    <i className="far icon fa-moon"></i>    
                </div>)}
        </div>
    )
}



export default ModeBtn