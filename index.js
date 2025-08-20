let tonyStark = {nome: "Tony Stark", codinome: "Homem de Ferro", armaPrincipal:"Armadura", velocidade:85, forca: 75, resistencia: 80};
let steveRogers = {nome: "Steve Rogers", codinome: "Capitão America", armaPrincipal:"Escudo", velocidade: 100, forca: 80, resistencia: 90};
let natashaRomanoff = {nome: "Natasha Romanoff", codinome: "Viuva Negra", armaPrincipal:"Armas de fogo", velocidade:90, forca: 90, resistencia:100};
let clintBarton = {nome: "Clint Barton", codinome: "Gavião Arqueiro", armaPrincipal: "Arco e flecha", velocidade: 60, forca: 60, resistencia:60};
let scottLang = {nome: "Scott Lang", codinome: "Homem-Formiga", armaPrincipal: "Mudança de tamanho", velocidade: 100, forca: 30, resistencia: 30};
let bruceBanner = {nome: "Bruce Banner", codinome: "Hulk", armaPrincipal: "Transformação", velocidade:80, forca: 100, resistencia: 95};
let jamesRhodes = {nome: "James Rhodes", codinome: "Máquina de Combate", armaPrincipal: "Armadura militar", velocidade: 70, forca: 100, resistencia: 90};
let thanos = {nome: "Thanos", codinome: "O Titã", armaPrincipal: "Joias do Infinito", velocidade: 70, forca: 95, resistencia: 85};
let personagens = [tonyStark,steveRogers,natashaRomanoff, clintBarton, scottLang, bruceBanner, jamesRhodes, thanos];


console.log(`Melhor Vingador`);
let melhorVingador = personagens[0];
let maiorPontuacao = personagens[0].velocidade + personagens[0].forca + personagens[0].resistencia;

for (let i = 0; i < personagens.length; i++) {
    let pontuacaoTotal = personagens[i].velocidade + personagens[i].forca + personagens[i].resistencia;
    console.log(`${personagens[i].nome}: ${pontuacaoTotal} pontos`);
    
    if (pontuacaoTotal > maiorPontuacao) {
        melhorVingador = personagens[i];
        maiorPontuacao = pontuacaoTotal;
    }
}
console.log(`\nMelhor Vingador: ${melhorVingador.nome} com ${maiorPontuacao} pontos totais`);


console.log("\nComparação");
for (let i = 0; i < personagens.length; i++) {
    for (let j = i + 1; j < personagens.length; j++) {
        console.log(`\n${personagens[i].nome} VS ${personagens[j].nome}:`);
        
        if (personagens[i].velocidade > personagens[j].velocidade) {
            console.log(`Velocidade: ${personagens[i].nome} vence (${personagens[i].velocidade} vs ${personagens[j].velocidade})`);
        } else if (personagens[j].velocidade > personagens[i].velocidade) {
            console.log(`Velocidade: ${personagens[j].nome} vence (${personagens[j].velocidade} vs ${personagens[i].velocidade})`);
        } else {
            console.log(`Velocidade: Empate (${personagens[i].velocidade})`);
        }
        
        if (personagens[i].forca > personagens[j].forca) {
            console.log(`Força: ${personagens[i].nome} vence (${personagens[i].forca} vs ${personagens[j].forca})`);
        } else if (personagens[j].forca > personagens[i].forca) {
            console.log(`Força: ${personagens[j].nome} vence (${personagens[j].forca} vs ${personagens[i].forca})`);
        } else {
            console.log(`Força: Empate (${personagens[i].forca})`);
        }
        
        if (personagens[i].resistencia > personagens[j].resistencia) {
            console.log(`Resistência: ${personagens[i].nome} vence (${personagens[i].resistencia} vs ${personagens[j].resistencia})`);
        } else if (personagens[j].resistencia > personagens[i].resistencia) {
            console.log(`Resistência: ${personagens[j].nome} vence (${personagens[j].resistencia} vs ${personagens[i].resistencia})`);
        } else {
            console.log(`Resistência: Empate (${personagens[i].resistencia})`);
        }
    }
}
