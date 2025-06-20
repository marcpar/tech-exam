import axios from "axios";

const ETHERSCAN_BASE_URL = "https://api-sepolia.etherscan.io";
const API_KEY = "GH2F1ITI9RH8V1XT86KXTCBW6W5TUE6ZGK";

export async function fetchTransactions(address: string) {
  try {
    const response = await axios.get(ETHERSCAN_BASE_URL, {
      params: {
        module: "account",
        action: "txlist",
        address,
        startblock: 0,
        endblock: 99999999,
        page: 1,
        offset: 10,
        sort: "desc",
        apikey: API_KEY,
      },
    });

    if (response.data.status !== "1") {
      throw new Error(response.data.message || "No transactions found");
    }

    return response.data.result;
  } catch (error: any) {
    throw new Error(error.message);
  }
}