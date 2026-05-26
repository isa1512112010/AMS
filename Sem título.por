programa {
  funcao inicio() {
    inteiro codigo, emax 
    real emin, Estoque_medio
    escreva("DIGITE O CÓDIGO DA PEÇA: ")
    leia(codigo)
    escreva("QUAL É O ESTOQUE MINÍMO? ")
    leia(emin)
    escreva("QUAL É O ESTOQUE MÁXIMO? ")
    leia(emax)
    Estoque_medio =(emax+emin)/2
    escreva ("A PEÇA DE CÓDIGO: ", codigo)
    escreva("  ")
    escreva ("O ESTOQUE MÉDIO É ", Estoque_medio)
    
  }
}
