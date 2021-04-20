const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/file/:name", (req, res, next) => {
  let options = {
    root: path.join(process.cwd(), "src", "examiner"),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true
    }
  };

  let fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

app.patch("/update/:name", (req, res) => {
  let filePath = path.join(process.cwd(), "src", "examiner", req.params.name);

  const file = fs.readFileSync(filePath, "utf-8");
  let fileData = JSON.parse(file);
  fileData.push(req.body);

  fs.writeFile(filePath, JSON.stringify(fileData), (err) => {
    if (err) throw err;
    res.status(200).send("New class added");
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
