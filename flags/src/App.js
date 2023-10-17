import React,  { useEffect, useState } from "react";

import CountryCard from "./Components/CountryCard";
import './App.css'

import { getAllCountries } from "./Services";
function App() {

  const [countriesList, setCountriesList] = useState([]);
  useEffect( () => {
    getAllCountries().then((result) => {
      const countries = result.data;
      setCountriesList(countries);
    });
  }, [])


  return (
    <div className="App">
      <div className="country-card-wrapper">

        {
          countriesList.map(country => (
            <CountryCard
            key={country.alpha3Code}
            name={country.name}
            capital={country.capital}
            population={country.population}
            flagUrl={country.flags.svg}
        />
          ))
        }
      </div>
    </div>
  );
}

export default App;
