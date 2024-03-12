import { getFilmes, getFilme } from "./filmes.js"

async function preencherCards() {
    const container = document.querySelector('body')

    try {
        const filmes = await getFilmes()
        if (filmes && filmes.length > 0) {
            filmes.forEach(filme => {
                const card = criarCards(filme)
                container.appendChild(card)
            })
        } else {
            console.error("Nenhum filme encontrado")
        }
    } catch (error) {
        console.error("Erro ao preencher os cards:", error)
    }
}


function criarCards(filme) {
    const card = document.createElement('div')
    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome

    const valor = document.createElement('button')
    valor.textContent = filme.valor_unitario

    card.appendChild(titulo)
    card.appendChild(valor)

    return card
}

const filme = {
    "nome": "Teste Post, HTML",
    "sinopse": "Testeeee",
    "duracao": "02:35:00",
    "data_lancamento": "2024-03-12",
    "data_relancamento": "",
    "foto_capa": "https://exemplo.com/foto_vale.jpg",
    "valor_unitario": 52.12
}

// await postFilme(filme)
await preencherCards()
console.table(await getFilme(2))