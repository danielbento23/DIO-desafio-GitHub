
const precoEtanol = 3.80;
const precoGasolina = 5.10;
let combustivel = 'Etanol';
const consumoCarro = 7;
const distancia = 420;

const litrosconsumidos = distancia/consumoCarro;

if(combustivel === 'Etanol'){
    const ValorGasto = litrosconsumidos * precoEtanol
    console.log(ValorGasto.toFixed(2))
}else if (combustivel === 'Gasolina'){
    const ValorGasto = litrosconsumidos * precoGasolina
    console.log(ValorGasto.toFixed(2))
}