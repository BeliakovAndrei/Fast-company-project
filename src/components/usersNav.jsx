import React from "react";
import Users from "./users";
import UserPage from "./userPage";
import { useParams } from "react-router-dom";

const { userId } = useParams();
const UsersNav = () => {
    return userId ? <UserPage /> : <Users />;
};

export default UsersNav;
