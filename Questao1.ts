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

    console.log(frequencias);

    return 0;
}

longestPalindrome('abscos')