const { models } = require("../../sequelize");
const csv = require("fast-csv");
const fs = require("fs");

const getAll = async (req, res) => {
  const students = await models.studentModel.findAll();
  res.status(200).json(students);
};

const getById = async (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const classObj = await models.studentModel.findByPk(id);
  if (classObj) {
    res.status(200).json(classObj);
  } else {
    res.status(404).send("Student not found");
  }
};

const create = async (req, res) => {
  if (Array.isArray(req.body)) {
    req.body.map(async (obj) => await models.studentModel.create(obj));
  } else {
    await models.studentModel.create(req.body);
  }
  res.status(201).end();
};

const upload = async (req, res) => {
  const fileRows = [];
  const convertInfoArrayToObj = (array) => {
    const keyValueArray = [];
    keyValueArray.push(["name", array[0]]);
    keyValueArray.push(["dob", new Date(array[1])]);

    return Object.fromEntries(keyValueArray);
  };

  // open uploaded file
  csv
    .parseFile(req.file.path)
    .on("data", (data) => {
      fileRows.push(data); // add row to fileRows
    })
    .on("end", async () => {
      fs.unlinkSync(req.file.path); // remove temp file

      await fileRows.reduce(async (memo, item) => {
        await memo;
        // console.log(convertInfoArrayToObj(item));
        const newObj = convertInfoArrayToObj(item);
        await models.studentModel.create(newObj);
      });
    });

  res.status(200).end();
};

const remove = async (req, res) => {
  const id = Number.parseInt(req.params.id, 10);

  await models.studentModel.destroy({
    where: {
      id: id,
    },
  });

  res.status(200).end();
};

module.exports = { getAll, getById, create, remove, upload };
