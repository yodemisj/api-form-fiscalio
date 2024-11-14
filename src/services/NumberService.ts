export class NumberService {
    static numberToText (num: number): string {
        const centenas = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];
        const dezenas = ["", "dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
        const especiais = ["", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezesete", "dezoito", "dezenove"];
        const unidades = ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];

        if (num === 0) return "zero";

        if(num > 999 || num < 0) return "Fora do alcance";
        
        let text = "";
        let resto: number;
        const centena = Math.floor(num / 100);
        resto = num % 100;
        const dezena = Math.floor(resto / 10);
        resto %= 10;
        const unidade = resto;
        
        if(centena == 1 && dezena == 0 && unidade == 0) return "cem";

        text += centenas[centena];

        if(dezena == 1 && unidade != 0) { // números de 11 a 19
            text += (text ? " e ": "");
            text += especiais[unidade];
            return text;
        }

        text += (text && dezena > 0 ? " e ": "");
        text += dezenas[dezena];

        text += (text && unidade > 0 ? " e ": "");
        text += unidades[unidade];

        return text;
    }
}