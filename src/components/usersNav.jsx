import React from "react";
import Users from "./users";

const UsersNav = () => {
    return userId ? <userPage/> : <Users/>;
};

export default UsersNav;
