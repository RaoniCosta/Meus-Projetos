const data = require('../data/zoo_data');

const animalNome = data.species;
function getAnimalsOlderThan(animal, age) {
  const animals = animalNome.find((elemento) => elemento.name === animal);
  return animals.residents.every((elemento) => elemento.age >= age);
}
getAnimalsOlderThan('otters');

module.exports = getAnimalsOlderThan;

//  criei a constante animalNome para localizar o objeto species.
// criei constante animals, e   nome das espécies, igualei ao parâmetro da função getAnimalsOlderThan
