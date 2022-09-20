import React from "react";

const Qualitie = ({name, color}) => {
   return <span 
    className={`badge bg-${color} me-1`}
    > {name} </span>  
    
}

export default Qualitie;