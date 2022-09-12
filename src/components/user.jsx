import React, { useState } from "react";
import api from "../API"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id!==userId))
    }; 

    const renderPhrase = (numberOfPeople) => {
    
    if (numberOfPeople > 4) 
    return `${numberOfPeople} человек тусанёт с тобой сегодня`
    if (numberOfPeople <= 4 && numberOfPeople > 1) 
    return `${numberOfPeople} человека тусанут с тобой сегодня`
    if (numberOfPeople === 1) 
    return `${numberOfPeople} человек тусанёт с тобой сегодня`
    if (numberOfPeople === 0) 
    return "Никто не тусанёт с тобой сегодня" 
    const getTable = document.querySelector(".table")
    console.log(getTable)
    };

console.log(users);
    return (
        <>
<label 
    className="btn btn-info btn m-2"
    >
    {renderPhrase(users.length)}
</label>
        <table 
        className="table table-dark table-striped"
        >
  <thead>
    <tr>
      <th scope="col">Имя</th>
      <th scope="col">Качества</th>
      <th scope="col">Профессия</th>
      <th scope="col">Встретился, раз</th>
      <th scope="col">Оценка</th>
    </tr>
  </thead>
  <tbody>
  {users.map((user) => ( 
    <tr key={user._id}>
        <td scope="row">{user.name}</td>
    <td>
    {user.qualities.map((quality) => (
    <span 
    key={quality._id}
        className={`badge bg-${quality.color} me-1`}
    >
        {quality.name}
    </span>    
    ))}
    
   </td>
    <td>{user.profession.name}</td>
    <td>{user.completedMeetings}</td>
    <td>{`5/${user.rate}`}</td>
    <td><button
    className="btn btn-warning"  
    onClick={() => handleDelete(user._id)}
      >
      Delete
      </button></td>
    </tr> 
  ))}
    </tbody>
</table>
</>
   )
};

export default Users;