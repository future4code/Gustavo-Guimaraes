```
function calculaNota(ex, p1, p2) {
  const conceitoAluno = ((p1 * 2) + (p2 * 3) + (ex * 1)) / 6 
  if(conceitoAluno >=9) {
    return "A"
    } else if ((conceitoAluno < 9) && (conceitoAluno >= 7.5)) {
      return "B"
    } else if ((conceitoAluno < 7.5) && (conceitoAluno >= 6)){
      return "C"  
    } else {
      return "D"
    }
}
```