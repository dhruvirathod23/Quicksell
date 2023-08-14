import React, { useState, useEffect } from 'react';
import './cardlist.css';
function FetchApi() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://apimocha.com/quicksell/data');
      const jsonData = await response.json();
      setData(jsonData.tickets);
      setFilteredData(jsonData.tickets);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const filtered = data.filter((item) => {
      const statusMatch = !selectedStatus || item.status === selectedStatus;
      const priorityMatch = !selectedPriority || item.priority.toString() === selectedPriority;
      return statusMatch && priorityMatch;
    });
    setFilteredData(filtered);
  }, [selectedStatus, selectedPriority, data]);

  return (
    <div>
      <div className='filter-options'>
        <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
          <option value="">Select Status</option>
          <option value="Todo">Todo</option>
          <option value="In progress">In Progress</option>
          <option value="Backlog">Backlog</option>
        </select>
        <select value={selectedPriority} onChange={(e) => setSelectedPriority(e.target.value)}>
          <option value="">Select Priority</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="card-list">
        {filteredData.map((item) => (
          <div key={item.id} className="card">
            <h2>{item.title}</h2>
            <p>Priority: {item.priority}</p>
            <p>Status: {item.status}</p>
            {/* Add more data fields here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchApi;
