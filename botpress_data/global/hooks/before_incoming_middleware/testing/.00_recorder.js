//CHECKSUM:b796f017ceffe8426527f7ae345b13fb18586cfe19ac3a4df16c0ef7a3dc6c33
"use strict";

const axios = require('axios');

const _ = require('lodash');

async function processIncoming() {
  try {
    const axiosConfig = await bp.http.getAxiosConfigForBot(event.botId);
    const {
      data
    } = await axios.post('/mod/testing/incomingEvent', event, axiosConfig);

    if (data) {
      event.state = _.merge(event.state, data);
    }
  } catch (err) {
    console.log('Error processing', err.message);
  }
}

return processIncoming();
//# sourceMappingURL=.00_recorder.js.map