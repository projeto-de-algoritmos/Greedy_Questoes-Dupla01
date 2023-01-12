function longestPalindrome(s: string): number {
    let resultado: number = 0;

    // Contar a frequência de cada caracter
    let frequencias: Map<string, number> = new Map<string, number>();
    for (const char of s) {
        let frequencia = frequencias.get(char);

        if (frequencia === undefined) {
            frequencias.set(char, 1);
        } else {
            frequencias.set(char, ++frequencia);
        }
    }

    /* Para cada frequência ímpar, realizar a operação ternária:
        Caso a frequência seja par, incrementar o resultado em: resultado + frequencia
        Caso a frequência seja ímpar, incrementar o resultado em: resultado + frequencia - 1
        
        Também, caso possua alguma frequência ímpar, significa que podemos adicionar
        um caracter no meio do palíndromo.
    */
    let possuiFrequenciasImpares: boolean = false;
    frequencias.forEach((freq: number) => {
        resultado = (freq % 2 === 0) ? (
            resultado + freq
        ) : (
            possuiFrequenciasImpares = true,
            resultado + freq - 1
        );
    });

    if (possuiFrequenciasImpares) {
        resultado++;
    }

    return resultado;
}

console.log(longestPalindrome('abccccdd'));