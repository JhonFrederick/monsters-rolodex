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

    handleChange = event => {
        this.setState({"searchField": event.target.value})
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()))
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder="Search monster"
                    handleChange={this.handleChange}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
