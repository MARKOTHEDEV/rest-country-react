


const Search=(props)=>(

    <input type="text" className={props.className} placeholder={props.placeholder} onChange={e=> props.filterByCountries(e.target.value)} />

)


Search.defaultProps={
    placeholder:"Search for a country...",
    className:"search"
}


export default Search