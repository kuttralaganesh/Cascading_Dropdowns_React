import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

export default function App() {
  const countries = [
    { id: 1, name: 'INDIA' },
    { id: 2, name: 'US' },
  ];

  const state = [
    { id: 1, countryId: 1, stateName: 'Tamil Nadu' },
    { id: 2, countryId: 1, stateName: 'Kerala' },
    { id: 3, countryId: 1, stateName: 'Bangalore' },
    { id: 4, countryId: 2, stateName: 'US_1' },
    { id: 5, countryId: 2, stateName: 'US_2' },
  ];

  const [countrie, setCountrie] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    setCountrie(countries);
  }, []);

  const handleCountry = (id) => {
    const countrystate = state.filter((value) => {
      return value.countryId == id;
    });
    console.log(countrystate);
    setStates(countrystate);
  };

  return (
    <>
      <select onChange={(e) => handleCountry(e.target.value)}>
        <option value={0}>Select Country</option>
        {countrie.map((item, index) => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>

      <select>
        <option value={0}>Select-State</option>
        {states.map((value) => {
          return <option key={value.id}>{value.stateName}</option>;
        })}
      </select>
    </>
  );
}
