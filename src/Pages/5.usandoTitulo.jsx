import Titulo from '../Components/Título'

export default function usandoTitulo() {
    return (
        <div>
            <h1>Usando Título</h1>
            <Titulo 
            principal="Página de Cadastro"
            secundario="Incluir, alterar e excluir coisas"
            />
            <Titulo 
            principal="Página de Login"
            secundario="Informe o seu email e senha"
            pequeno={true}
            />
            <Titulo 
            principal="Página de Login"
            secundario="Informe o seu email e senha"
            pequeno={false}
            />
        </div>
    )
}