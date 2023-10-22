import React from "react";

const Searchbox = ({searching}) => {
    return(
        <div className="pa2">
            <input 
            className="pa3 ba b--green bg-light-blue"
            type='search' 
            placeholder='Search Here...'
            onChange={searching}
            />
        </div>
    )
}

export default Searchbox;