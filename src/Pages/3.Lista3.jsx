
function gerarLista(final = 10) {

    const lista = []
    for(let i = 1; i <= 10; i++) {
        lista.push(<span>{i},</span>)
    }

    return lista
}

export default function Lista2() {
    return(
        <div>
            <div>
                {gerarLista(20)}
            </div>
            <div>
                {gerarLista(3)}
            </div>
        </div>
    )
}

//  Ver um pouco da Fonte FireCode para estetica do Código.