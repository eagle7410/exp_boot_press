//CHECKSUM:395d30ef2bef1f3439834171625ae91d7d2aa74404a5651fb21601ecd251280a
"use strict";

const axios = require('axios');

async function execute() {
  try {
    const axiosConfig = await bp.http.getAxiosConfigForBot(event.botId);
    await axios.post('/mod/testing/processedEvent', event, axiosConfig);
  } catch (err) {
    console.log('Error processing', err.message);
  }
}

return execute();
//# sourceMappingURL=.00_recorder.js.map