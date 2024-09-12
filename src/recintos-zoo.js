class RecintosZoo {
    constructor(){
        this.animais = [
            { especie: 'leao', tamanho: 3, bioma: ['savana'] }, 
            { especie: 'leopardo', tamanho: 2, bioma: ['savana'] },
            { especie: 'crocodilo', tamanho: 3, bioma: ['rio'] },
            { especie: 'macaco', tamanho: 1, bioma: ['savana', 'floresta'] },
            { especie: 'gazela', tamanho: 2, bioma: ['savana'] },
            { especie: 'hipopotamo', tamanho: 4, bioma: ['savana', 'rio'] },
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
    }

}

export { RecintosZoo as RecintosZoo };
