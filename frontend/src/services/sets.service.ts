import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

export const getSets = async (sets, operation: string) => {
  try {
    let endpoint = "";
    switch (operation) {
      case "union":
        endpoint = "/set/union";
        break;
      case "intersection":
        endpoint = "/set/intersection";
        break;
      case "difference":
        endpoint = "/set/difference";
        break;
      case "symmetricDifference":
        endpoint = "/set/symmetric_difference";
        break;
      default:
        throw new Error(`Unsupported operation: ${operation}`);
    }

    const response = await api.post(endpoint, sets)
    return response.data;
  } catch (error) {
    console.error("Error executing operation:", error);
  }
}
