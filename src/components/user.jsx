import React, { useState } from "react";
import api from "../API"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const [count, setCount] = useState(0);

    const handleDelete = (userId) => {
    const getUserId = users.map(getId => getId._id)
    setUsers((prevState)=> prevState.filter(getUserId=>getUserId!==userId))
    }; 

    const renderPhrase = (number) => {
    number = users.map(userLength=>userLength.name).length
    
    if (number > 4) 
    return `${number} человек тусанёт с тобой сегодня`
    if (number <= 4 && number>1) 
    return `${number} человека тусанут с тобой сегодня`
    if (number === 1) 
    return `${number} человек тусанёт с тобой сегодня`
    if (number === 0) 
    return "Никто не тусанёт с тобой сегодня" 
    };

console.log(users);
    return (
        <>
<label 
    className=" btn btn-info btn m-2"
    >
    {renderPhrase()}
</label>

        <table className="table table-dark table-striped">
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
    <td><button onClick={() => handleDelete(user)}>Delete</button></td>
    </tr> 
  ))}
    </tbody>
</table>
</>
   )
};

export default Users;