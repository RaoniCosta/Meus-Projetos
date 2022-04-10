const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  const arrayVazio = [];
  species.forEach((chaves) => {
    const { id } = chaves;
    if (id === ids[0] || id === ids[1]) {
      arrayVazio.push(chaves);
    }
  });
  return arrayVazio;
}

module.exports = getSpeciesByIds;
