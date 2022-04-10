const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionarios = data.employees.find((elemento) => elemento.id === id);
  const primeiroAnimal = funcionarios.responsibleFor.find((elemento) => elemento[0]);
  const dadosDoAnimal = data.species.filter((elemento) => elemento.id === primeiroAnimal);
  const animalMaisVelho = dadosDoAnimal[0].residents.reduce((acumulador, index) => {
    if (index.age > acumulador.age) {
      return index;
    } return acumulador;
  });
  return Object.values(animalMaisVelho);
}
console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'));
module.exports = getOldestFromFirstSpecies;
