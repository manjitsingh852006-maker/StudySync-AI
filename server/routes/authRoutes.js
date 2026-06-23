import express from "express";

const router = express.Router();

/* Login Route */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    /* Temporary Login */
    if (
      email === "manjit@gmail.com" &&
      password === "123456"
    ) {
      return res.json({
        success: true,
        message: "Login Successful",
      });
    }

    res.status(401).json({
      success: false,
      message: "Invalid Credentials",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

export default router;