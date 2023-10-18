import React, { useEffect, useState } from "react";
import CountryCard from "../Components/CountryCard";
import "./Home.css";
import { getAllCountries } from "../Services";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Home() {
  const [countriesList, setCountriesList] = useState([]);
  const [filteredCountriesList, setFilteredCountriesList] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [region, setRegion] = useState("All");

  //region change
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  // country change
  const handleCountryChange = (event) => {
    setCountryName(event.target.value);
  };

  useEffect(() => {
    // Fetch country details when the component mounts
    const fetchAllCountries = async () => {
      try {
        const result = await getAllCountries();
        const countries = result.data;
        setCountriesList(countries);
        setFilteredCountriesList(countries);
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };
    fetchAllCountries();
  }, []);

  useEffect(() => {
    //All country
    if (region === "All" && countryName === "") {
      setFilteredCountriesList(countriesList);
    } else {
      let filteredCountriesList = countriesList;
      if (region !== "All") {
        filteredCountriesList = filteredCountriesList.filter((country) => {
          if (country.region === region) {
            return true;
          } else {
            return false;
          }
        });
      }
      if (countryName.length) {
        filteredCountriesList = filteredCountriesList.filter((country) => {
          const lowerCaseName = country.name.toLowerCase();
          if (lowerCaseName.includes(countryName.toLowerCase())) {
            return true;
          } else {
            return false;
          }
        });
      }
      setFilteredCountriesList(filteredCountriesList);
    }
  }, [region, countriesList, countryName]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior of the Enter key
    }
  };

  return (
    <div className="Home">
      <div className="filter-wrapper">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Country Name"
            variant="outlined"
            onChange={handleCountryChange}
            value={countryName}
            onKeyPress={handleKeyPress}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Filter by Region
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // defaultValue={"All"}
              value={region}
              label="Filter by Region"
              onChange={handleRegionChange}
            >
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"Africa"}>Africa</MenuItem>
              <MenuItem value={"Americas"}>Americas</MenuItem>
              <MenuItem value={"Asia"}>Asia</MenuItem>
              <MenuItem value={"Europe"}>Europe</MenuItem>
              <MenuItem value={"Oceania"}>Oceania</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <div className="country-card-wrapper">
        {filteredCountriesList.map((country) => (
          <Link
            to={`/countries/${country.alpha3Code}`}
            key={country.alpha3Code}
            style={{ textDecoration: "none" }}
          >
            <CountryCard
              key={country.alpha3Code}
              name={country.name}
              capital={country.capital}
              population={country.population}
              flagUrl={country.flags.svg}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
