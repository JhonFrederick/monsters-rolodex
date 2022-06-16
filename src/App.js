import CardList from "./components/card-list/card-list.component";
import './App.css';
import SearchBox from "./components/search-box/search-box.component";
import {useState, useEffect} from "react";

const App = () => {

  const [searchField, setSearchField] = useState("") // [value, setValue]
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {setMonsters(users)})
  }, [])

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField)
      });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        placeholder="search monsters"
        onChangeHandler={onSearchChange}/>
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
