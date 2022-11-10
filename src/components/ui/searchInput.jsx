import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({ onChange, value }) => {
    return (
        <input
            className="mb-3"
            onChange={onChange}
            value={value}
            type="text"
            placeholder="Поиск по имени..."
        />
    );
};

SearchInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
};

export default SearchInput;
