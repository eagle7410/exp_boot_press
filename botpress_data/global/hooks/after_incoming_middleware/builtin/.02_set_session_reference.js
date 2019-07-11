//CHECKSUM:2882bc9d224f3ca72e359a2ea036387381e318e5644b4010447d20ce19a0dee9
"use strict";

async function hook() {
  if (event.type === 'session_reference' && event.payload.signature && event.payload.text) {
    const verifySignature = await bp.security.getMessageSignature(event.payload.text);

    if (event.payload.signature === verifySignature) {
      Object.assign(event.state.session, {
        reference: event.payload.text
      });
      event.setFlag(bp.IO.WellKnownFlags.SKIP_DIALOG_ENGINE, true);
      event.setFlag(bp.IO.WellKnownFlags.FORCE_PERSIST_STATE, true);
    }
  }
}

return hook();
//# sourceMappingURL=.02_set_session_reference.js.map