const express = require("express");
const path = require("path");
const cors = require("cors");
const multer = require("multer");
const upload = multer({dest: "public/uploads/"}).single("");
const fs = require("fs");

const PORT = process.env.PORT || 3001;

const publicPath = path.join(process.cwd(), "public");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/file/:name", (req, res) => {
  const options = {
    root: publicPath,
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true
    }
  };

  res.sendFile(req.params.name, options, (err) => {
    if (err)
      res.status(404).send("Requested file not found.");
  });
});

app.post("/upload/:name", (req, res) => {

});

app.patch("/update/:name", (req, res) => {
  const filePath = path.join(publicPath, req.params.name);
  const file = fs.readFileSync(filePath, "utf-8");
  let fileData = JSON.parse(file);
  fileData.push(req.body);

  fs.writeFile(filePath, JSON.stringify(fileData), (err) => {
    if (err) {
      res.status(500).send("An error occurred. Class not added");
    }
    res.status(200).send("New class added");
  });
});

app.delete("/delete/class/:name", (req, res) => {
  const className = req.params.name;
  const filePath = path.join(publicPath, "classList.json");
  const file = fs.readFileSync(filePath, "utf-8");
  let fileData = JSON.parse(file);

  for (let index = 0; index < fileData.length; index++) {
    const element = fileData[index];
    if (element.name === className){
      fileData.splice(index, 1);
      break;
    }
  }

  fs.writeFile(filePath, JSON.stringify(fileData), (err) => {
    if (err) {
      res.status(500).send("An error occurred. Class has not been deleted");
    }
    res.status(200).send("Class deleted");
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
