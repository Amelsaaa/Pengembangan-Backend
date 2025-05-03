const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const barangRoutes = require("./routes/barangRoutes");

const app = express();
const port = 9898;

app.use(cors());
app.use(bodyParser.json());
app.use("/barangs", barangRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
