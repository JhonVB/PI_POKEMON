const axios = require("axios");
const { uploadTypes } = require("../Services/index");
// const {}
// const { infoApi } = require("../Services/index");
const getTypes = async (req, res) => {
  try {
    const types = await uploadTypes();
    res.send(types);
  } catch (error) {
    return "error al traer los tipos";
  }
};

const infoDb = (module.exports = {
  getTypes,
});
