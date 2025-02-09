import { Router } from "express";

const router = Router();

router.get("/checkout", (req, res) => {
  res.json("endpoint ok");
});

export default router;
