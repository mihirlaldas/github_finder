import React from "react";

export default function UserList(props) {
    let listItem = props.data.map(element => {
        return (
            <div
                className="col-md-4 col-lg-3 my-3 py-3 text-center"
                key={element.id}
            >
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        return props.showRepos(
                            element.login,
                            element.avatar_url
                        );
                    }}
                >
                    <button
                        className="btn btn-primary card bg-light text-dark"
                        type="submit"
                        value={element.login}
                    >
                        <img
                            className="card-img-top img-fluid img-thumbnail"
                            src={element.avatar_url}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">{element.login}</h5>
                        </div>
                    </button>
                </form>
            </div>
        );
    });
    return (
        <div>
            <h1>UserList</h1>
            <div className="container">
                <div className="row">{listItem}</div>
            </div>
        </div>
    );
}
