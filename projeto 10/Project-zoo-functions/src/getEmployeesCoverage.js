const data = require('../data/zoo_data');

function nomeAnimal(ids) {
  return data.species.find((specie) => specie.id === ids).name;
}
// console.log(nomeDaEspecie('e8481c1d-42ea-4610-8e11-1752cfc05a46')); // retorna tigers

function localizacaoDoAnimal(ids) {
  return data.species.find((specie) => specie.id === ids).location;
}
// console.log(localizaçãoDaEspecie('e8481c1d-42ea-4610-8e11-1752cfc05a46')); // retorna tigers NW

function localizaEmployee(employee) {
  return data.employees.find((funcionario) => {
    if (funcionario.id === employee.id) return true;
    if (funcionario.firstName === employee.name) return true;
    if (funcionario.lastName === employee.name) return true;
    return false;
  }); // Afirmação do parametro passado pela função é verdadeiro
}
// console.log(localizaEmployee({ name: 'Sharonda' }));

function dadosfunc(objetoEmployee) {
  return {
    id: objetoEmployee.id,
    fullName: `${objetoEmployee.firstName} ${objetoEmployee.lastName}`,
    locations: objetoEmployee.responsibleFor.map((id) => localizacaoDoAnimal(id)),
    species: objetoEmployee.responsibleFor.map((id) => nomeAnimal(id)),

    // id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
    // fullName: "Sharonda Spry", // nome completo: firstName + lastName
    // species: ["otters", "frogs"], // espécies as quais a pessoa é responsável
    // locations: ["SE", "SW"], // Um array contendo todas as localizações das espécies
  };
}

function getEmployeesCoverage(employee) {
  if (!employee) {
    return data.employees.map((funcionario) => dadosfunc(funcionario));
  }
  // Sem parâmetros, retorna uma lista com a cobertura de todas as pessoas funcionárias;
  const employeeprocura = localizaEmployee(employee);

  if (!employeeprocura) {
    throw new Error('Informações inválidas');
  }
  const total = dadosfunc(employeeprocura);
  return total;
}

// console.log(getEmployeesCoverage('qualquercoise'));

module.exports = getEmployeesCoverage;
