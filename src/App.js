import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

export default function App() {
  const countries = [
    { id: 1, name: 'US' },
    { id: 2, name: 'INDIA' },
  ];

  const [countrie, setCountrie] = useState([]);
  useEffect(() => {
    setCountrie(countries);
  },[]);

  return (
    <>
      <select>
        <option value={0}>Select Country</option>
      </select>
    </>
  );
}
