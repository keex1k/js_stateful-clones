'use strict'

function transformStateWithClones(state, actions) {
  // write code here
  const pomObject = { ...state };
  const result = [];

  const actLength = Object.keys(actions).length;

  for (const step in actions) {
    const allTypes = actions[step];

    for (const type in allTypes) {
      if (allTypes[type] === 'clear') {
        for (const prop in pomObject) {
          delete pomObject[prop];
        }

        result.push(pomObject);
      } else if (Array.isArray(allTypes[type])) {
        const array = allTypes[type];

        for (const arrElement in array) {
          for (const poProp in pomObject) {
            if (array[arrElement] === poProp) {
              delete pomObject[poProp];
            }
          }
        }
        result.push(pomObject);
      } else if (typeof allTypes[type] === 'object') {
        const propsToAdd = allTypes[type];

        for (const ptaProp in propsToAdd) {
          pomObject[ptaProp] = propsToAdd[ptaProp];
        }
        result.push(pomObject);
      }
    }
  }

  return result;
}

module.exports = transformStateWithClones;
