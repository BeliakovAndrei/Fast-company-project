import React from "react";
import Qualitie from "./quality";
import BookMark from "./bookmark";

const User = ({
_id,
name,
qualities,
profession,
completedMeetings,
rate,
onDelete,
bookmark,
onToggleBookMark,
}) => {
    return ( 
    <tr>
    <td scope ="row">{name}</td>
    <td>
    {qualities.map((qualitie) => (
     <Qualitie key={qualitie._id}{...qualitie}/>
    ))}
    </td>
    <td>{profession.name}</td>
    <td>{completedMeetings}</td>
    <td>{`5/${rate}`}</td>
    <td><BookMark status = {bookmark} onClick={()=> onToggleBookMark(_id)} />
    </td>
    <td><button
    className="btn btn-warning"  
    onClick={()=> onDelete(_id)}
      >
      Delete
      </button></td>
    </tr> 
   )
};

export default User;