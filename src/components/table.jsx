import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ onSort, selectedSort, columns, data, children, arrows }) => {
    return (
        <table className= "table table-dark table-striped">
            {children || (
                <>
                    <TableHeader {...{ onSort, selectedSort, columns, arrows }} />
                    <TableBody {...{ columns, data }}/>
                </>
            )}
        </table>
    );
};

Table.propTypes = {
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    columns: PropTypes.object,
    data: PropTypes.array.isRequired,
    children: PropTypes.array,
    arrows: PropTypes.element
};

export default Table;
