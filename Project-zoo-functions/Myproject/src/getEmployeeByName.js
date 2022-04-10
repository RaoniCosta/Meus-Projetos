const data = require('../data/zoo_data');

const { employees } = data;
function getEmployeeByName(employeeName) {
  return (
    employees.find(({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName) || {}
  );
}

module.exports = getEmployeeByName;
// importei os dados para o objeto employees. Data é onde se encontra todos os dados dos funcionários
// retornei o primeiro e o último nome do funcionário
// usei o find para encontrar o primeiro nome do funcionário e o último nome e o destructor para localizar primeiro
// e ultimo nome no objeto
// igualei o primeiro e ultimo nome com o parâmetro da função e adicionei o objeto vazio
