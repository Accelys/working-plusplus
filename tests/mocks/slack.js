/**
 * A simple mock of the parts of the Slack Web API that we use.
 *
 * @author Tim Malone <tdmalone@gmail.com>
 */

'use strict';

/* eslint-disable no-empty-function */

module.exports = {
  chat: {
    postMessage: ( ) => {
      return new Promise( ( ) => {

      });
    }
  }
};
