import { useState } from "react";




const ModeBtn=()=>{

    const [theme,setTheme] =useState('light-mode');



    const ToggleThemeMode=(e)=>{
        // const theme;
        const htmlTag = document.querySelector('html');
   
        let lightMode = 'light-mode'
        let darkMode = 'dark-mode'
      
      
        if(htmlTag.getAttribute('theme-mode').includes(lightMode)){
            htmlTag.setAttribute('theme-mode',darkMode);
            setTheme(darkMode)
        }else{
            setTheme(lightMode)
           htmlTag.setAttribute('theme-mode',lightMode);
        }   
        localStorage.setItem('theme-mode',theme)
      

    }
    console.log(theme.includes('light-mode'))
    return(
        <div id="mode_btn"  onClick={(e)=> ToggleThemeMode(e)}>
        { theme.includes('light-mode')==true?(
                            <div className="dark_mode">
                    
                            Dark Mode
                            <i className="far icon fa-moon"></i>    
                        </div>
                     ):( <div className="light_mode icon">
                     Light Mode
                 
                     <i className="fas  fa-sun"></i>    
                 </div>)
                 
                 }



        

                       
        </div>
    )
}



export default ModeBtn