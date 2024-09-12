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

        this.recintos = [
            { numero: 1, bioma: 'savana', tamanho: 10, animais: [{ especie: 'MACACO', quantidade: 3 }] },
            { numero: 2, bioma: 'floresta', tamanho: 5, animais: [] },
            { numero: 3, bioma: 'savana e rio', tamanho: 7, animais: [{ especie: 'GAZELA', quantidade: 1 }] },
            { numero: 4, bioma: 'rio', tamanho: 8, animais: [] },
            { numero: 5, bioma: 'savana', tamanho: 9, animais: [{ especie: 'LEAO', quantidade: 1 }] }
        ];
    }
    analisaRecintos(animal, quantidade) {
    }

}

export { RecintosZoo as RecintosZoo };
