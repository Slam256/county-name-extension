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

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {details ? (
            <div>
              <h2>Price: {details.price}</h2>
              <h2>Taxes: {details.taxes}</h2>
              <h2>Full Address: {details.fullAddress}</h2>
            </div>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>

        <button onClick={handleClick}>Get Property Details</button>
      </header>
    </div>
  );
};

export default Popup;
