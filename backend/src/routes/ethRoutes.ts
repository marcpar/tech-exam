import { Router } from "express";
import { getEthereumInfo } from "../controllers/ethController";

const router = Router();

router.get("/eth/:address", getEthereumInfo);
router.post("/mint", async (req, res) => {
  try {
    const { address } = req.body;
    const txHash = await mintToken(address);
    res.json({ success: true, txHash });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/token/:id", async (req, res) => {
  try {
    const owner = await getTokenOwner(req.params.id);
    res.json({ tokenId: req.params.id, owner });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;