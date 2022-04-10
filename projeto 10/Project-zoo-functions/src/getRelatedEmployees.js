const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const Sharonda = '4b40a139-d4dc-4f09-822d-ec25e819a5ad';

function isManager(id) {
  if (id === stephanieId || id === olaId || id === burlId) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (managerId === stephanieId) {
    return ['Burl Bethea', 'Ola Orloff', 'Emery Elser'];
  }
  if (managerId === Sharonda) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };
