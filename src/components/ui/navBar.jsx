import React from "react";

const NavBar = () => {
    return (
        <ul className="nav nav-tabs bg-dark" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="/" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" >
                    <a href="/">Main Page</a>
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="/login" type="button" role="tab" aria-controls="" aria-selected="false">
                    <a href="/login">Login</a>
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="/users" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                    <a href="/users">Users</a>
                </button>
            </li>
        </ul>
    );
};

export default NavBar;
