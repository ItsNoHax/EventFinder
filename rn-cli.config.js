/* eslint-disable */
/**
 * Use this to blacklist files from being bundled.
 * For example: We will be excluding /scripts folder.
 */
const blacklist = require('metro-config/src/defaults/blacklist');

const config = {
  resolver: {
    blacklistRE: blacklist([
      /tests\/.*/,
      /scripts\/.*/,
      /docs\/.*/,
    ])
  }
};

module.exports = config;