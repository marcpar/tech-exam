"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ethController_1 = require("../controllers/ethController");
const router = (0, express_1.Router)();
router.get("/eth/:address", ethController_1.getEthereumInfo);
exports.default = router;
