"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEthereumInfo = void 0;
const ethService_1 = require("../services/ethService");
const getEthereumInfo = async (req, res) => {
    const address = req.params.address;
    if (!address) {
        res.status(400).json({ error: "Address is required" });
        return;
    }
    try {
        const gasPrice = await (0, ethService_1.getGasPrice)();
        const blockNumber = await (0, ethService_1.getBlockNumber)();
        const balance = await (0, ethService_1.getBalance)(address);
        res.json({
            address,
            gasPrice: gasPrice.toString(),
            blockNumber,
            balance: balance.toString(),
        });
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.getEthereumInfo = getEthereumInfo;
