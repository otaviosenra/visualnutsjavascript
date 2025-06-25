
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar() {
        let ataque = "";
        
        switch(this.tipo.toLowerCase()) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque básico";
        }
        
        console.log(`${this.nome} atacou usando ${ataque}`);
    }
    
    exibirInfo() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Tipo: ${this.tipo}`);
    }
}

function demonstrarHerois() {
    const tiposHerois = ["mago", "guerreiro", "monge", "ninja"];
    const nomes = ["Gandalf", "Arthas", "Liu Kang", "Naruto"];
    const idades = [150, 30, 25, 17];
    
    tiposHerois.forEach((item,i)=>{
        console.log(`\n--- Herói ${i + 1} ---`);
        const heroi = new Heroi(nomes[i], idades[i], tiposHerois[i]);
        heroi.exibirInfo();
        heroi.atacar();
    })
    for(let i = 0; i < tiposHerois.length; i++) {
    }
}

function criarHeroiPersonalizado(nome, idade, tipo) {
    const heroi = new Heroi(nome, idade, tipo);
    
    console.log("\n=== HERÓI PERSONALIZADO ===");
    heroi.exibirInfo();
    heroi.atacar();
    
    return heroi;
}

// Executando a demonstração
console.log("=== SISTEMA DE HERÓIS DE AVENTURA ===");
demonstrarHerois();

// Exemplo de uso com herói personalizado
console.log("\n" + "=".repeat(40));
criarHeroiPersonalizado("Merlin", 300, "mago");
criarHeroiPersonalizado("Conan", 35, "guerreiro");

// Testando com tipo não mapeado
console.log("\n--- Teste com tipo diferente ---");
const heroiEspecial = new Heroi("Legolas", 500, "arqueiro");
heroiEspecial.exibirInfo();
heroiEspecial.atacar();