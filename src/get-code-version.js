'use strict';

var proc = require('child_process'),
    util;

/**
 * NOTE: once https://github.com/serverless/serverless/issues/3073 is resolved,
 * this will not have to rely on the hacks that it is using now with synchronous
 * system calls.
 */
util = {

   tag: function() {
      // eslint-disable-next-line no-sync
      return proc.execSync('git describe --always --dirty --tags').toString().trim();
   },

   hash: function() {
      // eslint-disable-next-line no-sync
      return proc.execSync('git describe --always --dirty').toString().trim();
   },

   both: function() {
      var tag = util.tag(),
          hash = util.hash(),
          isTagPlusHash = /-[0-9]+-g[0-9a-f]{4,40}(-dirty)?$/.test(tag);

      if (isTagPlusHash || tag === hash) {
         return hash;
      }

      return tag.replace('-dirty', '') + '-' + hash;
   },

};

module.exports = util;
