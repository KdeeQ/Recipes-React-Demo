import React, { useEffect, useState, useRef } from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = () => {


  const APP_ID = "";
  const APP_KEY = "";

  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const proxyUrl = 'https://stark-taiga-49462.herokuapp.com/';

  const reg = 'http://www.recipepuppy.com/api/?i=';

  const getRecipes = async () => {
    const response = await fetch(proxyUrl + reg + query);
    const data = await response.json();
    setRecipes(data.results);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} ></input>
        <button className="search-button" type="submit">Search</button>
      </form>

      {recipes.map(recipe =>
        <Recipe key={recipe.title} title={recipe.title}
          ingredients={recipe.ingredients}
          image={recipe.thumbnail}
        ></Recipe>
      )}

    </div>
  );
};

export default App;
