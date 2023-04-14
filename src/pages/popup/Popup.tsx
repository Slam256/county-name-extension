import React, { useState } from "react";
import "@pages/popup/Popup.css";

interface PropertyDetails {
  price: string;
  taxes: string;
  fullAddress: string;
}

const Popup = () => {
  const [details, setDetails] = useState<PropertyDetails | null>(null);

  const handleClick = () => {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
      const currentTabID = tabs[0]?.id;
      if (currentTabID) {
        chrome.tabs.sendMessage(currentTabID, "", (response) => {
          setDetails(response);
        });
      }
    });
  };

  const handleDownload = () => {
    if (details) {
      const csvData: string[][] = [
        ["Price", "Taxes", "Full Address"],
        [
          `"${details.price}"`,
          `"${details.taxes}"`,
          `"${details.fullAddress}"`,
        ],
      ];
      const csvContent =
        "data:text/csv;charset=utf-8," +
        csvData.map((e: string[]) => e.join(",")).join("\n");
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "property_details.csv");
      document.body.appendChild(link);
      link.click();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Summarize Property Details</h1>
      </header>
      <div className="details-content">
        {details ? (
          <>
            <div>
              <p>
                Price: <span>{details.price}</span>
              </p>
              <p>
                Taxes: <span>{details.taxes}</span>
              </p>
              <p>
                Full Address: <span>{details.fullAddress}</span>
              </p>
            </div>
          </>
        ) : (
          <h2></h2>
        )}
      </div>

      <button className="details-btn" onClick={handleClick}>
        Get Property Details
      </button>

      <button
        className="download-btn"
        onClick={handleDownload}
        disabled={!details}
      >
        Download Property Details
      </button>
    </div>
  );
};

export default Popup;
