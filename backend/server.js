const express = require("express");
const router = require("./routes/goalroutes");
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extends: false }));
app.use("/api/goals", router);
app.listen(port, () => {
  console.log(`connected to port ${port}`);
});
