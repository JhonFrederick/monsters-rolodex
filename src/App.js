import React, {Component} from 'react'

import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.componen";


class App extends Component {
    constructor() {
        super();
        this.state = {
            'monsters': [],
            'searchField': ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({"monsters": users}))
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()))
        return (
            <div className="App">
                <SearchBox placeholder="Search monster"
                    handleChange={event => this.setState({"searchField": event.target.value})}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
