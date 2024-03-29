import { loginController } from "@/backend/controllers/auth";
import dbConnect from "@/backend/"

dbConnect();

export default async function handler(req, res) {
  try {
    const { email, password } = req.body;
    await loginController("credentials", { email, password });

    res.status(200).json({ success: true });
  } catch (error) {
    if (error.type === "CredentialsSignin") {
      res.status(401).json({ error: "Invalid credentials." });
    } else {
      res.status(500).json({ error: "Something went wrong." });
    }
  }
}
