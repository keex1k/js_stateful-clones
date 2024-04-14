'use strict';

function transformStateWithClones(state, actions) {
  // write code here
  let pomObject = { ...state };
  const result = [];

  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        pomObject = {};
        break;
      case 'addProperties':
        Object.assign(pomObject, action.extraData);
        break;
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete pomObject[key];
        }
        break;
      default:
        console.error(`Unknown action type: ${action.type}`);
    }

    result.push(pomObject);
  }

  return result;
}

module.exports = transformStateWithClones;
