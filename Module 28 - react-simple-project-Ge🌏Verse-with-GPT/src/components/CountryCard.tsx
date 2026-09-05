import type { CountryType } from '../type';

interface CountryCardProps {
  country: CountryType;
}

export default function CountryCard({ country }: CountryCardProps) {

  // API currency 
  const currency = Object.values(
    country.currencies.currencies
  )[0];

  return (
    <div className="country-card">

      {/* Flag */}
      <img
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />

      {/* Country Name */}
      <h2>{country.name.common}</h2>

      {/* Country Information */}
      <div className="country-info">

        <p>
          <strong>Capital</strong>
          <span>
            {country.capital.capital[0] || "N/A"}
          </span>
        </p>

        <p>
          <strong>Region</strong>
          <span>
            {country.region.region}
          </span>
        </p>

        <p>
          <strong>Population</strong>
          <span>
            {country.population.population.toLocaleString()}
          </span>
        </p>

        {/* ⭐ Currency */}
        <p>
          <strong>Currency</strong>
          <span>
            {currency?.name || "N/A"}
            {currency?.symbol && ` (${currency.symbol})`}
          </span>
        </p>

      </div>

    </div>
  );
}