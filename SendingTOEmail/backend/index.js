
import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/emailsend", async (req, res) => {
  const { username, email, comment } = req.body;

  try {
    // setup transporter
    let transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP settings
      auth: {
        user: "shivanikumari4218@gmail.com", // replace with your Gmail
        pass: "aerv gvlj xfby yvra",   // use App Password, not Gmail password
      },
    });

    // email options
    let mailOptions = {
      from: "abhishekptlinfo@gmail.com",
      to: email,
      subject: `Hello ${username}`,
      text: `Your comment: ${comment}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email", error });
  }
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
