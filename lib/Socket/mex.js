"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executeWMexQuery = void 0;
var _boom = require("@hapi/boom");
var _index = require("../WABinary/index.js");

/**
 * Mutation query IDs — these require type: 'set' instead of 'get'
 * WA server rejects mutations sent as 'get' with no error (silent fail)
 */
const MUTATION_QUERY_IDS = new Set([
  '8823471724422422',     // CREATE
  '24250201037901610',    // UPDATE_METADATA
  '7379130381991044',     // FOLLOW (updated query ID)
  '24404358912487870',    // JOIN_V2 (legacy follow, keep as mutation)
  '9767147403369991',     // UNFOLLOW
  '29766401636284406',    // MUTE
  '9864994326891137',     // UNMUTE
  '7341777602580933',     // CHANGE_OWNER
  '6551828931592903',     // DEMOTE
  '30062808666639665'     // DELETE
]);

const wMexQuery = (variables, queryId, query, generateMessageTag) => {
  const iqType = MUTATION_QUERY_IDS.has(queryId) ? 'set' : 'get';
  return query({
    tag: 'iq',
    attrs: {
      id: generateMessageTag(),
      type: iqType,
      to: _index.S_WHATSAPP_NET,
      xmlns: 'w:mex'
    },
    content: [{
      tag: 'query',
      attrs: {
        query_id: queryId
      },
      content: Buffer.from(JSON.stringify({
        variables
      }), 'utf-8')
    }]
  });
};
const executeWMexQuery = async (variables, queryId, dataPath, query, generateMessageTag) => {
  const result = await wMexQuery(variables, queryId, query, generateMessageTag);
  const child = (0, _index.getBinaryNodeChild)(result, 'result');
  if (child?.content) {
    const data = JSON.parse(child.content.toString());
    if (data.errors && data.errors.length > 0) {
      const errorMessages = data.errors.map(err => err.message || 'Unknown error').join(', ');
      const firstError = data.errors[0];
      const errorCode = firstError.extensions?.error_code || 400;
      throw new _boom.Boom(`GraphQL server error: ${errorMessages}`, {
        statusCode: errorCode,
        data: firstError
      });
    }
    // Try exact dataPath first, then try nested data.data[dataPath], then data.data directly
    let response;
    if (dataPath) {
      response = data?.data?.[dataPath];
      if (response === undefined) {
        // Walk all keys in data.data to find a match (WA may nest differently)
        const keys = Object.keys(data?.data || {});
        for (const k of keys) {
          if (k === dataPath || k.startsWith(dataPath.split('_')[0])) {
            response = data.data[k];
            break;
          }
        }
      }
      if (response === undefined) {
        response = data?.data;
      }
    } else {
      response = data?.data;
    }
    if (typeof response !== 'undefined') {
      return response;
    }
  }
  const action = (dataPath || '').startsWith('xwa2_') ? dataPath.replace(/_/g, ' ') : (dataPath || 'operation').replace(/_/g, ' ');
  throw new _boom.Boom(`Failed to ${action}, unexpected response structure.`, {
    statusCode: 400,
    data: result
  });
};
//# sourceMappingURL=mex.js.map
exports.executeWMexQuery = executeWMexQuery;
