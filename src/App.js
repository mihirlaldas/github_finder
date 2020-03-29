import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import UserList from "./Components/UserList";
import Repos from "./Components/Repos";
import axios from "axios";
export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            repos: [],
            login: "",
            avatar: "",
            tab: false
        };
    }
    // using asyn await and config
    fetchData = async url => {
        const config = {
            method: "get",
            baseURL: "https://api.github.com/"
        };
        let resultList = await axios
            .get(url, config)
            .then(res => res.data)
            .catch(err => console.log(err.message));

        return resultList;

        // quick style
        // axios
        //     .get("https://api.github.com/search/users?q=" + key)
        //     .then(res =>
        //         this.setState({
        //             userList: res.data
        //         })
        //     )
        //     .catch(err => console.log(err.message));
    };
    search = async username => {
        console.log(username);
        let data = await this.fetchData("/search/users?q=" + username);
        this.setState({
            userList: data.items,
            tab: false
        });
    };

    showRepos = async (login, avatar) => {
        console.log(login);
        let data = await this.fetchData("/users/" + login + "/repos");
        console.log(data);
        this.setState({
            repos: data,
            login: login,
            avatar: avatar,
            tab: true
        });
    };
    render() {
        return (
            <React-Fragment>
                <Navbar searchUser={this.search} />

                {this.state.tab ? (
                    <Repos
                        data={this.state.repos}
                        login={this.state.login}
                        avatar={this.state.avatar}
                    />
                ) : (
                    <UserList
                        data={this.state.userList}
                        showRepos={this.showRepos}
                    />
                )}
            </React-Fragment>
        );
    }
}

export default App;
