// services/api.js

export const fetchFluidOunces = async () => {
    const response = await fetch("https://jh8bjmps9f.execute-api.us-east-1.amazonaws.com/v1/flow/total_flow");
    if (!response.ok) {
      throw new Error("Failed to fetch bottles");
    }
    const total_flow = await response.json();
    // return await response.json().quantity;
    return total_flow.quantity;
  }
  