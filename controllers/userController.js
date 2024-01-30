const fs = require('fs');
// user handler
exports.getAllUsers = (req, res) => {
    res.status(500).json({
      status: 'error',
      message: 'This route not yet defined',
    });
  };
  exports.createUser = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "create user"
    });
  };
  exports.getUser = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "get user"
    });
  };
  exports.updateUser = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "updated user"
    });
  };
  exports.deleteUser = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "deleted user"
    });
  };