const wordSearch = (letters, word) => {
  let returnBool = false;
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (const hor of horizontalJoin) {
    if (hor === word) {
      return true;
    }

    if (!(hor === word)) {
      returnBool = false;
    }
  }

  const verticalArr = [];

  for (let i = 0; i < letters[0].length; i++) {
    verticalArr.push([]);
  }

  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[0].length; j++) {
      verticalArr[j].push(letters[i][j]);
    }
  }

  const verticalJoin = verticalArr.map(vElem => vElem.join(''));

  for (const ver of verticalJoin) {
    if (ver === word) {
      return true;
    }
    if (ver !== word) {
      returnBool = false;
    }
  }

  return returnBool;
};


module.exports = {
  wordSearch
};