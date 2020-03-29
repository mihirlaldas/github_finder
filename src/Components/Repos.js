import React, { Component } from "react";

export class Repos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: "all"
        };
    }

    handleChange = e => {
        this.setState({
            language: e.target.value
        });
    };
    render() {
        let list = this.props.data.map(repo => {
            if (
                repo.language === this.state.language ||
                this.state.language === "all"
            )
                return (
                    <tr key={repo.id}>
                        <td>
                            <a href={repo.html_url}>{repo.name}</a>
                        </td>
                        <td>{repo.description}</td>
                        <td>{repo.language}</td>
                        <td>{repo.created_at}</td>
                        <td>{repo.updated_at}</td>
                    </tr>
                );
        });
        let languages = {};
        this.props.data.forEach(ele => {
            if (ele.language != null) languages[ele.language] = ele.language;
            console.log("foreach");
        });
        console.log("languages:", languages);

        let langList = Object.keys(languages);
        let langEle = langList.map(ele => <option value={ele}>{ele}</option>);

        return (
            <div>
                <h1 className="bg-primary text-white text-center p-2">Repos</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-4 card">
                            <img
                                src={this.props.avatar}
                                alt=""
                                className="card-img-top"
                            />
                            <div className="row card-body">
                                <h4 className="card-title">
                                    {this.props.login}
                                </h4>
                            </div>
                        </div>
                        <div className="col-8">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Description</th>
                                        <div className="container">
                                            <th scope="col" className="row">
                                                <div className="col">
                                                    Language
                                                </div>
                                                <select
                                                    name="language"
                                                    value={this.state.language}
                                                    className="custom-class"
                                                    onChange={this.handleChange}
                                                    className="form-control col"
                                                >
                                                    <option value="all">
                                                        All
                                                    </option>
                                                    {langEle}
                                                </select>
                                            </th>
                                        </div>

                                        <th scope="col">Created at</th>
                                        <th scope="col">Last updated</th>
                                    </tr>
                                </thead>
                                <tbody>{list}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Repos;
