'use strict'

function transformStateWithClones(state, actions) {
  // write code here
  const pomObject = { ...state };
  const result = [];

  const actLength = Object.keys(actions).length;

  for (const key in actions) {
    const p = actions[key];

    for (const x in p) {
      if (p[x] === 'clear') {
        for (const s in pomObject) {
          delete pomObject[s];
        }

        result.push(pomObject);
      } else if (Array.isArray(p[x])) {
        const arr = p[x];

        for (const a in arr) {
          for (const s1 in pomObject) {
            if (arr[a] === s1) {
              delete pomObject[s1];
            }
          }
        }
        result.push(pomObject);
      } else if (typeof p[x] === 'object') {
        const obj = p[x];

        for (const o in obj) {
          pomObject[o] = obj[o];
        }
        result.push(pomObject);
      }
    }
  }

  return result;
}

module.exports = transformStateWithClones;
