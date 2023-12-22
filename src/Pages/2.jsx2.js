export default function jsx2() {
    const array = [
        <li>Paulo</li>,
        <li>Ana</li>,
        <li>Pedro</li>,
    ]

    const conteudo = (
        <div>
            <h1>JSX #02</h1>
            {array()}
        </div>
    )
    return conteudo
}

//  Quando coloca na mesma linha não da Erro porém ao por abaixo Sim.
//  Por isso é recomendado por o () após o Return.
//  Const conteudo = <div><h1>JSX #02</h1></div>.
//  HTML, CSS & JS - Tecnologias.
//  Componentes (HTML, CSS & Js).