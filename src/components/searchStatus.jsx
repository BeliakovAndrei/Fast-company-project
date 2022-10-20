import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if ((number > 4 && number < 15) || lastOne === 1) {
            return "человек тусанет c тобой сегодня";
        }
        if ([2, 3, 4].indexOf(lastOne) >= 0) { return "человека тусанут c тобой сегодня"; };
    };
    return (
        <h2>
            <span
                className={"badge position-relative " + (length > 0 ? "bg-success" : "bg-danger")}
            >
                {length > 0
                    ? `${length + " " + renderPhrase(length)}`
                    : "с тобой сегодня никто не тусанет"}
            </span>
        </h2>
    );
};
SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
