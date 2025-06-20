import { Request, Response } from "express";
import { getGasPrice, getBlockNumber, getBalance } from "../services/ethService";

export const getEthereumInfo = async (req: Request, res: Response) => {
  const address = req.params.address;

  if (!address) {
    res.status(400).json({ error: "Address is required" });
    return;
  }

  try {
    const gasPrice = await getGasPrice();
    const blockNumber = await getBlockNumber();
    const balance = await getBalance(address);

    res.json({
      address,
      gasPrice: gasPrice.toString(),
      blockNumber,
      balance: balance.toString(),
    });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
