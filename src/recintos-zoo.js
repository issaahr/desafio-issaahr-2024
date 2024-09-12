class RecintosZoo {
    constructor(){
        this.recintos = [
            { numero: 1, bioma: "savana", tamanhoTotal: 10, animais: [{ especie: "macaco", quantidade: 3 }] },
            { numero: 2, bioma: "floresta", tamanhoTotal: 5, animais: [] },
            { numero: 3, bioma: "savana e rio", tamanhoTotal: 7, animais: [{ especie: "gazela", quantidade: 1 }] },
            { numero: 4, bioma: "rio", tamanhoTotal: 8, animais: [] },
            { numero: 5, bioma: "savana", tamanhoTotal: 9, animais: [{ especie: "leao", quantidade: 1 }] },
        ];

        this.animais = [
            { especie: "leao", tamanho: 3, biomas: ["savana"], carnivoro: true },
            { especie: "leopardo", tamanho: 2, biomas: ["savana"], carnivoro: true },
            { especie: "crocodilo", tamanho: 3, biomas: ["rio"], carnivoro: true },
            { especie: "macaco", tamanho: 1, biomas: ["savana", "floresta"], carnivoro: false },
            { especie: "gazela", tamanho: 2, biomas: ["savana"], carnivoro: false },
            { especie: "hipopotamo", tamanho: 4, biomas: ["savana", "rio"], carnivoro: false },
        ];
    }
    analisaRecintos(animal, quantidade) {
        const especieAnimal = this.animais.find(a => a.especie === animal.toLowerCase());
        if (!especieAnimal) {
          return { erro: "Animal inválido", recintosViaveis: null };
        }
    
        if (quantidade <= 0 || !Number.isInteger(quantidade)) {
          return { erro: "Quantidade inválida", recintosViaveis: null };
        }
    
        const recintosViaveis = [];
    
        for (const recinto of this.recintos) {
          if (especieAnimal.especie === "crocodilo" && recinto.bioma !== "rio") continue;
          if (especieAnimal.especie !== "crocodilo" && !especieAnimal.biomas.some(bioma => recinto.bioma.includes(bioma))) continue;
    
          let espacoOcupado = 0;
          let recintoInvalido = false;
    
          for (const animalExistente of recinto.animais) {
            const especieExistente = this.animais.find(a => a.especie === animalExistente.especie);
    
            if (especieExistente.carnivoro && especieExistente.especie !== especieAnimal.especie) {
              recintoInvalido = true;
              break;
            }
    
            espacoOcupado += animalExistente.quantidade * especieExistente.tamanho;
          }
    
          if (recintoInvalido) continue;
    
          if (recinto.animais.length > 0 && !recinto.animais.every(a => a.especie === especieAnimal.especie)) {
            espacoOcupado += 1;
          }
    
          const espacoDisponivel = recinto.tamanhoTotal - espacoOcupado;
          const espacoNecessario = quantidade * especieAnimal.tamanho;
    
          if (espacoDisponivel >= espacoNecessario) {
            recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoDisponivel - espacoNecessario} total: ${recinto.tamanhoTotal})`);
          }
        }
    
        if (recintosViaveis.length > 0) {
          return { erro: null, recintosViaveis };
        } else {
          return { erro: "Não há recinto viável", recintosViaveis: null };
        }
      }
}

export { RecintosZoo as RecintosZoo };
