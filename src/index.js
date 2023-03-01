const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/api/Teritories/All", async (req, res) => {
  try {
    const data = await axios.get(
      "https://netzwelt-devtest.azurewebsites.net/Territories/All"
    );

    res.status(200).json(data.data);
  } catch (error) {
    throw error;
  }
});

app.post("/api/Account/Signin", async (req, res) => {
  try {
    const data = await axios.post(
      "https://netzwelt-devtest.azurewebsites.net/Account/SignIn",
      {
        ...req.body,
      }
    );

    res.status(200).json(data.data);
  } catch (error) {
    const errorResponse = error.response.data;
    if (errorResponse) {
      return res.status(400).json(errorResponse);
    }

    throw error;
  }
});

app.listen(3001, () => {
  console.log("Server is listening to port 3001.");
});
