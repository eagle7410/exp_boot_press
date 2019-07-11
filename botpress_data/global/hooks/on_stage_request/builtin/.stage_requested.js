//CHECKSUM:a887fe693ef852b5732905d9a5eb951be8df9565ab38e1dab1dfb2c913607928
"use strict";

/**
 * This is called when a user requests to to promote abot to the next stage.
 * You can set the current stage of the bot to the next one
 *
 * @param bp The botpress SDK
 * @param bot The complete configuration of the bot
 * @param users The list of users of that workspace (email, role)
 * @param pipeline The list of configured stages
 * @param hookResult The result of the hook which contains actions
 */
const stageChangeRequest = async () => {
  const request_user = users.find(u => u.email == bot.pipeline_status.stage_request.requested_by);

  if (!request_user || request_user.role !== 'admin.*') {
    /*
    we want to keep the bot in the current stage and until another user with the right role promotes it
    here would go an api call to your 3rd party notification service
    */
    hookResult.actions = [];
    return;
  }
};

return stageChangeRequest();
//# sourceMappingURL=.stage_requested.js.map