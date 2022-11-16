import React from "react";
import Users from "../../layouts/users";
import UserPage from "./userPage";
import { useParams } from "react-router-dom";
import UserEdit from "./userEditPage/userEdit";

const UsersNav = () => {
    const params = useParams();
    const { userId, edit } = params;
    return (
        <>
            {userId ? (
                edit ? (
                    <UserEdit userId={userId} />
                ) : (
                    <UserPage userId={userId} />
                )
            ) : (
                <Users />
            )}
        </>
    );
};

export default UsersNav;
