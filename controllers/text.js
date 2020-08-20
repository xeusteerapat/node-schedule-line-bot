const Message = require('../models/Message');
const { textBroadcast } = require('../libs/broadcast');

exports.broadcastText = async (req, res) => {
  const { text, isSchedule } = req.body;

  await Message.create(req.body);

  if (!isSchedule) {
    textBroadcast(text);

    res.status(200).json({
      success: true,
    });
  } else {
    res.status(200).json({
      success: true,
    });
  }
};
