const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((element) => element.age < 18).length;
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const senior = entrants.filter((element) => element.age >= 50).length;
  const objeto = { child, adult, senior };
  return objeto;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const valorDoObjeto = Object.values(countEntrants(entrants));
  const child = data.prices.child * valorDoObjeto[0];
  const adult = data.prices.adult * valorDoObjeto[1];
  const senior = data.prices.senior * valorDoObjeto[2];

  return child + adult + senior;
}
module.exports = { calculateEntry, countEntrants };
