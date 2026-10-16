require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const { HoldingsModel } = require("./model/HoldingsModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.get("/addHoldings", async (req, res) => {
  let tempHoldings = [
    {
      name: "BHARTIARTL",
      qty: 2,
      avg: 538.05,
      price: 541.15,
      net: "+0.58%",
      day: "+2.99%",
    },
    {
      name: "INFY",
      qty: 1,
      avg: 1350.5,
      price: 1555.45,
      net: "+15.18%",
      day: "-1.60%",
    },
    {
      name: "ITC",
      qty: 5,
      avg: 202.0,
      price: 207.9,
      net: "+2.92%",
      day: "+0.80%",
    },
    {
      name: "M&M",
      qty: 2,
      avg: 809.9,
      price: 779.8,
      net: "-3.72%",
      day: "-0.01%",
    },
    {
      name: "RELIANCE",
      qty: 1,
      avg: 2193.7,
      price: 2112.4,
      net: "-3.71%",
      day: "+1.44%",
    },
    {
      name: "TATAPOWER",
      qty: 5,
      avg: 104.2,
      price: 124.15,
      net: "+19.15%",
      day: "-0.24%",
    },
    {
      name: "TCS",
      qty: 1,
      avg: 3041.75,
      price: 344.89,
      net: "+0.58%",
      day: "+2.99%",
    },
    {
      name: "HDFCBANK",
      qty: 2,
      avg: 538.05,
      price: 541.15,
      net: "+0.58%",
      day: "+2.99%",
    },
    {
      name: "WIPRO",
      qty: 4,
      avg: 489.05,
      price: 577.75,
      net: "+18.58%",
      day: "+0.99%",
    },
    {
      name: "JIO",
      qty: 5,
      avg: 789.05,
      price: 879.15,
      net: "+0.58%",
      day: "+2.99%",
    },
  ];

  tempHoldings.forEach((item) => {
    let newHolding = new HoldingsModel({
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
    });

    newHolding.save();
  });
  res.send("Done!")
});

app.listen(PORT, () => {
  console.log("app started");
  mongoose.connect(uri);
  console.log("db connected");
});
