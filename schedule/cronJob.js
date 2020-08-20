const cron = require('node-cron');
const Message = require('../models/Message');
const { textBroadcast } = require('../libs/broadcast');

// test run every minutes
exports.cronJob = () => {
  return cron.schedule('* * * * *', async () => {
    const textWithSchedule = await Message.find({
      isSchedule: true,
    });

    console.log('find schedule with true and every minute', textWithSchedule);

    const readyToBroadcast = textWithSchedule.find(
      obj => Date.parse(obj.scheduleTime) - Date.now() < 0
    );

    console.log('This message is ready to broadcast', readyToBroadcast);

    if (readyToBroadcast) {
      const targetBroadcastId = readyToBroadcast._id;
      textBroadcast(readyToBroadcast.text);

      await Message.findByIdAndUpdate(targetBroadcastId, {
        isSchedule: false,
      });
    }
    console.log('Nothing broadcast just yet!');
  });
};
