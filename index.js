function calcularSaldoRanked(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    
    return { saldo, nivel };
}

while (true) {
    const vitorias = parseInt(prompt("Digite o número de vitórias: "));
    const derrotas = parseInt(prompt("Digite o número de derrotas: "));
    
    const { saldo, nivel } = calcularSaldoRanked(vitorias, derrotas);
    
    alert(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}.`);
    
    const continuar = prompt("Deseja calcular novamente? (s/n): ");
    if (continuar.toLowerCase() !== 's') {
        break;
    }
}