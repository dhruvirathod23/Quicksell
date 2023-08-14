import React, { useState, useEffect } from 'react';
import './cardlist.css'; // Import your CSS file for styling

function CardList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://apimocha.com/quicksell/data');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="card-list">
      {data.map((item) => (
        <div key={item.id} className="card">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          {/* Add more data fields here */}
        </div>
      ))}
    </div>
  );
}

export default CardList;
