import {
  countryCardContainer,
  front,
  back,
  countryTitle,
} from "./CountryCard.module.css";

export const CountryCardComponent = ({
  countryDetails: {
    name: { common: countryName },
    flags,
    capital = [],
    languages = {},
    population,
    startOfWeek,
    continents,
  },
}) => {
  const countryLanguages = [];
  for (const languagesKey in languages) {
    countryLanguages.push(languages[languagesKey]);
  }

  return (
    <>
      <div className={countryCardContainer}>
        <div className={front}>
          <img
            src={countryName === "Andorra" ? flags.png : flags.svg}
            alt={flags.alt}
          />
        </div>
        <div className={back}>
          <h1 className={countryTitle}>{countryName}</h1>
          <h2>
            <span>Capital</span> : {capital}
          </h2>
          <h2>
            <span>Language{countryLanguages.length > 1 && "s"}</span> :{" "}
            {countryLanguages.join(", ")}
          </h2>
          <h2>
            <span>Population</span> : {population}
          </h2>
          <h2>
            <span>Start Of Week</span> :{" "}
            {startOfWeek.charAt(0).toUpperCase() + startOfWeek.slice(1)}
          </h2>
          <h2>
            <span>Continent</span> : {continents}
          </h2>
        </div>
      </div>
    </>
  );
};
