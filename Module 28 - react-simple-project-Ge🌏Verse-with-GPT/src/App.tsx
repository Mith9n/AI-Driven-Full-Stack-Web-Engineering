import { Suspense } from 'react';
import type { CountryType } from './type';
import Countries from './components/Countries';
import './App.css';

// step - 01
const countriesPromise = async (): Promise<CountryType[]> => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/all"
  );

  const data = await res.json();

  return data.countries;
};

function App() {

  return (
    <Suspense
  fallback={
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading countries...</p>
    </div>
  }
  >
  <Countries countriesPromise={countriesPromise()} />
  </Suspense>
  );

  
}

export default App;