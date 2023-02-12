import React, { useState } from "react";
import "./sales.css";

function Sales() {
  const [isActive, setIsActive] = useState(false);
  const [isActiveavailable, setIsAvtiveAvailable] = useState(false);
  const [isDailyActive, setDailyIsActive] = useState(true);
  const [isMonthlyActive, setMothlyIsActive] = useState(false);
  const [isFilterActive, setFilterIsActive] = useState(false);

  const handleClick = (value) => {
    switch (value) {
      case "isDailyActive":
        setDailyIsActive(true);
        setMothlyIsActive(false);
        setFilterIsActive(false);
        break;
      case "isMonthlyActive":
        setDailyIsActive(false);
        setMothlyIsActive(true);
        setFilterIsActive(false);
        break;
      case "isFilterActive":
        setDailyIsActive(false);
        setMothlyIsActive(false);
        setFilterIsActive(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="sales-container">
      <div>
        <h1>Sales Details</h1>
      </div>
      <div className="tab-cards">
        <div className={`tab ${isDailyActive ? "activeTab" : ""}`} onClick={() => handleClick("isDailyActive")}>
          <div>Daily sales</div>
        </div>
        <div className={`tab ${isMonthlyActive ? "activeTab" : ""}`} onClick={() => handleClick("isMonthlyActive")}>
          <div>Monthly sales</div>
        </div>
        <div className={`tab ${isFilterActive ? "activeTab" : ""}`} onClick={() => handleClick("isFilterActive")}>
          <div>Filtering sales</div>
        </div>
      </div>
      <div>
        <div className={`tab-content ${isDailyActive ? "tabContentActive" : ""}`}>
          This is the daily
        </div>
        <div className={`tab-content ${isMonthlyActive ? "tabContentActive" : ""}`}>
          This is the monthly
        </div>
        <div className={`tab-content ${isFilterActive ? "tabContentActive" : ""}`}>
          This is the filter
        </div>
        salesrep sales sales by area
      </div>
    </div>
  );
}

export default Sales;
