const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const barangRoutes = require("./barangRoutes"); // ⬅️ diubah dari userRoutes ke barangRoutes

const app = express();
const port = 6969;

app.use(cors());
app.use(bodyParser.json());
app.use("/barang", barangRoutes); // ⬅️ diubah dari /users ke /barang

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
