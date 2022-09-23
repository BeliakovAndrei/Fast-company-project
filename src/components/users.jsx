import React, { useState } from "react";
import User from "./user";
import Pagination from "./pagination";
import PropTypes from "prop-types";

const Users = ({ users, ...rest }) => {
    const pageSize = 4;
    const count = users.length;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        console.log("page", pageIndex);
        setCurrentPage(pageIndex);
    };
    const paginate = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;
        return [...items].splice(startIndex, pageSize);
    };

    const userCrop = paginate(users, currentPage, pageSize);

    return (
        <div>
            {count > 0 && (
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User key={user._id} {...rest} {...user} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired
};
export default Users;
