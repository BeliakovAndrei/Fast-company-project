import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../API";
import Qualitie from "./quality";
import PropTypes from "prop-types";

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    const handleAllUsers = () => {
        history.push("/users");
    };
    useEffect(() => {
        API.users.getById(userId).then((data) => setUser(data));
    }, []);
    return user
        ? (
            <div>
                <h2>Имя: {user.name}</h2>
                <h3>Профессия: {user.professions}</h3>
                <h4>
                    {" "}
                    Качества:
                    {user.qualities.map((qual) => (
                        <Qualitie key={qual._id} {...qual}/>
                    ))}
                </h4>
                <h4>Количество встреч: {user.completedMeetings}</h4>
                <h3>Оценка: {user.rate}</h3>
                <button
                    onClick={() => {
                        handleAllUsers();
                    }}
                >
                    Все пользователи
                </button>
            </div>
        )
        : (
            "loading..."
        );
};

UserPage.propTypes = {
    userId: PropTypes.string
};

export default UserPage;
