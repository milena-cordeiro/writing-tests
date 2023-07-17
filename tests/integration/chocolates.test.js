const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('Usando GET em /chocolates', function () {
  it('Retorna a lista completa de chocolates!', async function () {
    const output = [
      { id: 1, name: 'Mint Intense', brandId: 1 },
      { id: 2, name: 'White Coconut', brandId: 1 },
      { id: 3, name: 'Mon Chéri', brandId: 2 },
      { id: 4, name: 'Mounds', brandId: 3 },
    ];
    const response = await chai.request(app).get('/chocolates');
// verificar se o código HTTP retornado corresponde ao valor esperado:
    expect(response.status).to.be.equals(200);
// validamos se o corpo da mensagem corresponde a lista com todos os chocolates cadastrados na API:
expect(response.body.chocolates).to.deep.equal(output);

  });
});