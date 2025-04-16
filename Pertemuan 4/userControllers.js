const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "data.json");

//Fungsi untuk membaca data dari JSON
const readData = () => {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
};

//Fungsi untuk menulis data ke JSON
const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

//GET: ambil semua user
exports.getAllUser = (req, res) => {
  const users = readData();
  res.json(users);
};

//GET: ambil user berdasarkan ID
exports.getUserById = (req, res) => {
  const users = readData();
  const user = users.find((u) => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: "user not found" });
};

//POST: tambah user baru
exports.createUser = (req, res) => {
  const users = readData();
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  writeData(users);
  res.status(201).json({ message: "user created successfully", newUser });
};

//PUT: update data user
exports.updateUser = (req, res) => {
  let users = readData();
  const index = users.findIndex((u) => u.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "User not found" });

  users[index] = { ...users[index], ...req.body };
  writeData(users);
  res.json({ message: "User updated successfully", user: users[index] });
};

//DELETE: hapus data user
exports.deleteUser = (req, res) => {
  let users = readData();
  const newUsers = users.filter((u) => u.id != req.params.id);
  if (users.length === newUsers.length)
    return res.status(404).json({ message: "User not found" });

  writeData(newUsers);
  res.json({ message: "User deleted successfully" });
};
