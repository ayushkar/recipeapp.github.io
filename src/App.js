import React,{useState,useEffect, Component} from 'react';


import './App.css';
import Header from './Header';
import Recipes from './Recipes'
import Axios from 'axios';

// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Header from "./components/Header";
// import Recipes from "./components/Recipes";
// import Axios from "axios";

function App() {
  const [search, setSerach] = useState("pizza");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "ab12730c";
  const APP_KEY = "c9a80a2f9259ba583c91788baf101c7b";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = e => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;