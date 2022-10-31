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
