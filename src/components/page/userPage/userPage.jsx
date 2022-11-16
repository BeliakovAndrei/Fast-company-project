import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import API from "../../../API";
import Qualitie from "../../ui/qualities/quality";
import PropTypes from "prop-types";

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        API.users.getById(userId).then((data) => setUser(data));
    }, []);
    const handleAllUsers = () => {
        history.push("/users");
    };
    if (user) {
        return (
            <div>
                <h2>Имя: {user.name}</h2>
                <h3>Профессия: {user.profession.name}</h3>
                <h4>
                    {" "}
                    Качества:
                    {user.qualities.map((qual) => (
                        <Qualitie key={qual._id} {...qual} />
                    ))}
                </h4>
                <h4>Количество встреч: {user.completedMeetings}</h4>
                <h3>Оценка: {user.rate}</h3>
                <button onClick={handleAllUsers}>Все пользователи</button>
                <Link to={`/users/${userId}/edit`}>
                    <button>Изменить</button>
                </Link>
            </div>
        );
    } else {
        return <h2> loading...</h2>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
