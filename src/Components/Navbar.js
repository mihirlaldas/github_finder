import React, { Component } from "react";

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        };
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.searchUser(this.state.username);
    };
    render() {
        return (
            <div>
                <div className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="index.html">
                        <i className="fab fa-github"></i>Github Finder
                    </a>
                    <form
                        className="form-inline my-2 my-lg-0 justify-content-center"
                        onSubmit={this.handleSubmit}
                    >
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            name="username"
                            placeholder="Search profile"
                            aria-label="Search"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Navbar;
