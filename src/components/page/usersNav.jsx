import React from "react";
import Users from "../../layouts/users";
import UserPage from "./userPage";
import { useParams } from "react-router-dom";

const UsersNav = () => {
    const params = useParams();
    const { userId } = params;
    return <> {userId ? <UserPage userId={userId} /> : <Users />} </>;
};

export default UsersNav;
