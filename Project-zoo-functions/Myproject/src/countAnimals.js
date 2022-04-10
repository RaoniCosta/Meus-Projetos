const data = require('../data/zoo_data');

const nomeEspecie = (specie) => {
  const especieNome = data.species.find(({ name }) => name === specie);
  return especieNome.residents.length;
};
const especieSex = (specie, sex) => {
  const sexEspecie = data.species.find(({ name }) => name === specie);
  return sexEspecie.residents.filter((sexGirafa) => sexGirafa.sex === sex).length;
};
const animais = () => {
  const objeto = {};
  data.species.forEach(({ name, residents }) => {
    objeto[name] = residents.length;
  });
  return objeto;
};

function countAnimals(animal) {
  if (!animal) {
    return animais();
  }
  const { specie, sex } = animal;
  if (!sex && specie) {
    return nomeEspecie(specie);
  }
  return especieSex(specie, sex);
}

module.exports = countAnimals;
