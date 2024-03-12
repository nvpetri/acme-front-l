export async function getFilmes() {
    const url = 'http://localhost:8081/v2/acmefilmes/filmes'

    const response = await fetch(url)
    const filmes = await response.json()

    return filmes.filmes

}


export async function getFilme(id) {
    const idFilme = id

    const url = `http://localhost:8081/v2/acmefilmes/filme/${idFilme}`

    const response = await fetch(url)
    const filme = await response.json()

    return filme.filme[0]
}

// export async function postFilme(filme) {
//     const url = `http://10.107.134.41:8081/v2/acmefilmes/filme`

//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(filme)
//     }

//     const response = await fetch(url, options)

//     return response.ok
// }