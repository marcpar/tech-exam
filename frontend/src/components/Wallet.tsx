import { ethers } from "ethers";
import { fetchTransactions } from "../utils/etherscan";
import React, { useState, useEffect } from "react";

const Wallet = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [transactions, setTransactions] = useState<any[]>([]);
  const [connecting, setConnecting] = useState<boolean>(false);

  // Try auto-connect on load
  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_accounts", []);
        if (accounts.length > 0) {
          await connectWallet();
        }
      }
    };
    checkConnection();
  }, []);

  const connectWallet = async () => {
    if (connecting) return;
    setConnecting(true);
    setError("");

    try {
      if (!window.ethereum) throw new Error("MetaMask not found");

      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const rawBalance = await provider.getBalance(address);
      const balanceInEth = ethers.formatEther(rawBalance);
      const txs = await fetchTransactions(address);

      setAccount(address);
      setBalance(balanceInEth);
      setTransactions(txs);
    } catch (err: any) {
      if (err.code === -32002) {
        setError("MetaMask request already pending. Please approve it.");
      } else {
        setError(err.message || "Failed to connect wallet.");
      }
    } finally {
      setConnecting(false);
    }
  };

  return (
    <div>
      <h2>Ethereum Wallet</h2>
      {!account ? (
        <button onClick={connectWallet} disabled={connecting}>
          {connecting ? "Connecting..." : "Connect Wallet"}
        </button>
      ) : (
        <div>
          <p>Account: {account}</p>
          <p>Balance: {balance} ETH</p>
        </div>
      )}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {transactions.length > 0 && (
        <div>
          <h3>Last 10 Transactions</h3>
          <ul>
            {transactions.map((tx) => (
              <li key={tx.hash} style={{ marginBottom: "1rem" }}>
                <strong>Hash:</strong>{" "}
                <a
                  href={`https://etherscan.io/tx/${tx.hash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tx.hash.slice(0, 20)}...
                </a>
                <br />
                <strong>From:</strong> {tx.from}
                <br />
                <strong>To:</strong> {tx.to}
                <br />
                <strong>Value:</strong> {ethers.formatEther(tx.value)} ETH
                <br />
                <strong>Time:</strong>{" "}
                {new Date(
                  parseInt(tx.timeStamp) * 1000
                ).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Wallet;