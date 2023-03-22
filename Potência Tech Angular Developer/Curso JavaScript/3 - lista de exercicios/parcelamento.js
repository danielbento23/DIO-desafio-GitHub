/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */

let valor = 100;
const descDebito = (valor * 10) /100;
const avistaPix = (valor * 15)/100;
const parc = (valor * 10) / 100;
let modoPagamento = 'Parcelado 2x';

if(modoPagamento === 'Debito'){
    let valorFinal = valor - descDebito
    console.log(`R$${valorFinal.toFixed(2)}`)
    }else if(modoPagamento === "Dinheiro/Pix"){
            let valorFinal = valor - avistaPix;
            console.log(`R$${valorFinal.toFixed(2)}`)
        }else if(modoPagamento === "Parcelado 2x"){
                let valorFinal = valor 
                console.log(`R$${valorFinal.toFixed(2)}`)
            }else if(modoPagamento === 'Parcelado mais de 2x'){
                    let valorFinal = valor + parc;
                    console.log(`R$${valorFinal.toFixed(2)}`)
                }