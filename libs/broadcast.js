const axios = require('axios');

exports.textBroadcast = async (text, user) => {
  let data = JSON.stringify({
    to: [user.lineId],
    messages: [
      {
        type: 'text',
        text,
      },
    ],
  });

  const config = {
    method: 'post',
    url: `${process.env.LINE_MESSAGING_API}/multicast`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.lineToken}`,
    },
    data,
  };

  try {
    await axios(config);
  } catch (error) {
    console.log(error);
  }
};
