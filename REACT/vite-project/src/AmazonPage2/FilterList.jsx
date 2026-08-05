function FilterList(props){
    // props ->
    //title 
    // array of options [new, renewed, reused, user]
    //options [adjustable length, tanglefree, anti chev]
    const {title, options}=props;
    return(
        <div>
        <b>{title}</b>
        <div>
     {options.map((option, index)=>{
            return(
                <div key={index}>
                    <input type="checkbox" />
                    <span>{option}</span>
                </div>
            );
     })}
        </div>
    </div>
    );
}

export default FilterList;