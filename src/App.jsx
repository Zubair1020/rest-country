import { useEffect, useState } from "react";
import { CountryCardComponent } from "./components/country-card/CountryCardComponent.jsx";

const App = () => {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(setCountryData);
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>What's Your country?</h1>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "5rem",
          marginBlock: "5rem",
        }}
      >
        {countryData &&
          countryData.map((data) => (
            <CountryCardComponent
              key={data.cca2 + data.ccn3}
              countryDetails={data}
            />
          ))}
      </section>
    </>
  );
};

export default App;
