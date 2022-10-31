import { React, useState } from "react";
import users from "../API/fake.api/user.api";

const SearchInput = () => {
    const [value, setValue] = useState("");
    const filteredNames = users.filter((user) => {
        return user.name.toLowerCase().includes(value.toLocaleLowerCase());
    });
    return (
        <div>
            <form className="search_form">
                <input
                    className="mb-3"
                    type="text"
                    placeholder="Поиск по имени..."
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
        </div>
    );
};

export default SearchInput;
