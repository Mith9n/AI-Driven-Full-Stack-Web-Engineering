import type { CountryType } from '../type';
import { use, useState } from 'react';
import CountryCard from './CountryCard';

export interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {

  // API  country data 
  const countries = use(countriesPromise);

  // Search input
  const [search, setSearch] = useState("");

  // Search  country filter 
  const filteredCountries = countries.filter((country) =>
    country.name.common
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>

      <h1>Ge🌏Verse</h1>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Country Cards */}
      <div className="countries-container">

        {filteredCountries.map((country) => (
          <CountryCard
            key={country.cca3.cca3}
            country={country}
          />
        ))}

      </div>

    </div>
  );
}