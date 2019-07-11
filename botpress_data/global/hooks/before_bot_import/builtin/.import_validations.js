//CHECKSUM:417a76c99681cb35d58b6749f43cb591c21b5965a1855c9fe77acfdf812eb9b9
"use strict";

const fs = require('fs');
/**
 * This hook is called when a user uses the SDK to import a bot.
 * You can read the content of the temporary folder to analyze the bot's content. You can also change the content.
 *
 * To cancel the import, set the value `hookResult.allowImport = false`
 *
 * @param bp The botpress SDK
 * @param botId The ID of the bot
 * @param tmpFolder The submitted archive is extracted in this folder.
 */


const validateImport = async () => {
  // Read the files from the extracted archive. Check for prohibited files, etc.
  const files = fs.readdirSync(tmpFolder); // If you want to abort the import operation:
  // hookResult.allowImport = false
};

return validateImport();
//# sourceMappingURL=.import_validations.js.map