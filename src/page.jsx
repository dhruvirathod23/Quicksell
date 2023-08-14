import React,{useState} from 'react';
import './App.css'; // Import your CSS file for styling

function Navbar() {
  const [statusOption, setStatusOption] = useState('');
  const [priorityOption, setPriorityOption] = useState('');

  const handleStatusChange = (event) => {
    setStatusOption(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriorityOption(event.target.value);
  };

  return (
    <div className="navbar">
      <div className="display-dropdown">
        <button className="display-button">Display ▼</button>
        <div className="dropdown-content">
          <div className="section">
          <label className="section-header">
            Grouping
            <select value={statusOption} onChange={handleStatusChange}>
              <option value="status">Status</option>
              <option value="priority">Priority</option>
            </select>
          </label>
          </div>
          <div className="section">
          <label className="section-header">
            Ordering
            <select value={priorityOption} onChange={handlePriorityChange}>
              <option value="priority">Priority</option>
              <option value="status">Status</option>
            </select>
          </label>
          </div>
          
        </div>
      </div>
    </div>
  );
}
export default Navbar;