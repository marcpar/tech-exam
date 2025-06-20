import { Router } from "express";
import { getEthereumInfo } from "../controllers/ethController";

const router = Router();

router.get("/eth/:address", getEthereumInfo);

export default router;