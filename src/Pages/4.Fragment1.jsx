
import React from "react"

export default function fragment() {
    return (
        <React.Fragment>
            <h1>Título</h1>
            <h2>Subtítulo</h2>
        </React.Fragment>
    )
}

//  Importando o React.Fragment ele serve como uma Div Geral para o Código.
//  Ele não cria nenhum elemento na DOM além dos que estão dentro do React.Fragment.