import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../API";
import Qualitie from "./quality";

const history = useHistory();
const UserPage = () => {
    const [user, setUser] = useState()
    const handleAllUsers = () => {
        history.push("/users")
};
    useEffect(() => {
        API.users.fetchAll().then((data) => setUser(data));
    }, []);
    return user ? <div>
            <h2>{user.name}</h2>
            <h3>{user.professions}</h3>
            <h4>{user.qualities.map(qual=><Qualitie />)}</h4>
            <h4>{user.completedMeetings}</h4>
            <h3>{user.rate}</h3>
            <button onClick={()=>{handleAllUsers()}}>Все пользователи</button>
        </div>
    : 'loading...'
};

export default UserPage;
