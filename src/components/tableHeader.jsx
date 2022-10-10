import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        };
    };
    const handleArrows = (selectedSort, currentPath) => {
        const arrowDown = <i className = "bi bi-arrow-down-circle-fill"></i>;
        const arrowUp = <i className = "bi bi-arrow-up-circle-fill"></i>;
        if (selectedSort.path === currentPath) {
            if (selectedSort.order === "asc") {
                return arrowDown;
            } else {
                return arrowUp;
            }
        }
        return null;
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th key={column}
                        onClick={columns[column].path
                            ? () => handleSort(columns[column].path) && handleArrows(columns[column].path)
                            : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}{" "}
                        {handleArrows(selectedSort, columns[column].path)}
                    </th>
                ))}
                {/* <th scope="col">Качества</th>
                <th onClick={() => handleSort("profession.name")} scope="col">Профессия</th>
                <th onClick={() => handleSort("completedMeetings")} scope="col">Встретился, раз</th>
                <th onClick={() => handleSort("rate")} scope="col">Оценка</th>
                <th onClick={() => handleSort("bookmark")} scope="col">Избранное</th>
                <th scope="col"></th> */}
            </tr>
        </thead>
    );
};
TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired,
    handleArrows: PropTypes.func
};

export default TableHeader;
