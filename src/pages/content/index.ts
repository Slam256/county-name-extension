console.log("content scripts from redfin hunter loaded");

/**
 * @description
 * Chrome extensions don't support modules in content scripts.
 */
import("./components/Demo");

interface PropertyDetails {
  price: string;
  taxes: string;
  fullAddress: string;
}

const getPropertyDetails = (): PropertyDetails => {
  const container = document.querySelector<HTMLElement>(".CalculatorSummary");
  const priceElement = document.querySelector<HTMLElement>(
    "div:nth-of-type(1) > .statsValue"
  );
  const taxesElement = container.querySelector<HTMLElement>(
    ".Row:nth-child(2) .Row--content"
  );
  const addressElement = document.querySelector<HTMLElement>(".full-address");
  const streetAddress =
    addressElement?.querySelector<HTMLElement>(".street-address")?.textContent;
  const cityStateZip =
    addressElement?.querySelector<HTMLElement>(".dp-subtext")?.textContent;

  const price = priceElement?.textContent?.trim() || "";
  const taxes = taxesElement?.textContent?.trim() || "";
  const fullAddress = `${streetAddress} ${cityStateZip || ""}`;

  const details: PropertyDetails = {
    price,
    taxes,
    fullAddress,
  };
  return details;
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("message received from Sender", message);
  const details = getPropertyDetails();
  sendResponse(details);
});
