const User = require('../models/User');

exports.createUser = async (req, res, next) => {
  try {
    const { name, lineId, lineToken } = req.body;

    const user = await User.create({
      name,
      lineId,
      lineToken,
    });

    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};
