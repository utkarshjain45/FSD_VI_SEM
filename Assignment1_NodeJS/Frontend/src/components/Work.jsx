import React, { useState } from 'react';
import './work.css';
const Work = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (endpoint) => {
    setLoading(true);
    setResult(null); // Clear previous result while loading
    try {
      // Ensure your backend is running on port 3000
      const response = await fetch(`http://localhost:3000/${endpoint}`);
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResult({ title: "Error", data: "Could not connect to backend." });
    }
    setLoading(false);
  };

  // Helper function to render content based on data type
  const renderContent = () => {
    if (!result) return null;

    // 1. Handle Object Data (User Info)
    if (typeof result.data === 'object' && result.data !== null) {
      return (
        <div className="info-card">
          {Object.entries(result.data).map(([key, value]) => (
            <div key={key} className="info-row">
              <span className="info-label">{key}:</span>
              <span className="info-value">{value === null ? 'null' : String(value)}</span>
            </div>
          ))}
        </div>
      );
    }

    // 2. Handle Simple Data (Memory, CPU)
    return <div className="simple-result">{result.data}</div>;
  };

  return (
    <div className="work-container">
      <h1 className="work-heading">Work with Node JS</h1>
      
      <div className="button-group">
        <button onClick={() => fetchData('total-memory')}>Total Memory</button>
        <button onClick={() => fetchData('free-memory')}>Free Memory</button>
        <button onClick={() => fetchData('user-info')}>User Info</button>
        <button onClick={() => fetchData('cpu-arch')}>CPU Architecture</button>
      </div>

      <div className="result-area">
        {loading && <p className="loading-text">Fetching system data...</p>}
        
        {result && (
          <div className="result-box">
            <h3 className="result-title">{result.title}</h3>
            {renderContent()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;