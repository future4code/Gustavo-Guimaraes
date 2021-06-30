``` 
function calculaPrecoTotal(quantidade) {
  if (quantidade < 12) {
    let soma = quantidade * 1.3
    return soma 
  } else if (quantidade >= 12) {
    let soma = quantidade * 1 
    return soma
  }
}
``` 