import React from "react";
import _ from "lodash";
import axios from "axios";

export class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get('https://api.github.com/search/repositories?q=javascript&sort=stars&order=desc')
            .then(response => this.setState({data: response.data}))
            .catch(err => console.log(err));
    }

    render() {
        let {data} = this.state;
        return data ? (
            <ul>
                { _.map(_.get(data, "items"), (item) => <ListItem item={item}/>)}
            </ul>
        ) : (
            <p>正在加载中...</p>
        );
    }
}

const ListItem = ({item}) => {
    return (
        <li>
            <h4>
                <a href="{item.html_url}">{item.name}</a>
                <sub>star:{item.stargazers_count}, fork:{item.forks_count}</sub>
            </h4>
            <small>{item.description}</small>
        </li>
    );
}