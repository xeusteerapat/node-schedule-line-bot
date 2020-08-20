const axios = require('axios');

exports.textBroadcast = async text => {
  let data = JSON.stringify({
    to: [process.env.MY_LINE_ID],
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
      Authorization: `Bearer ${process.env.LINE_VONDER_ACCESS_TOKEN}`,
    },
    data,
  };

  try {
    await axios(config);
  } catch (error) {
    console.log(error);
  }
};
