import { useEffect, useState } from "react"

//nessa funcao crio constantes de estado para as medias e para o loading, uma funcao para os alunos que tem as informaçoes 
//dos alunos e de suas notas

const Questao01X = () => {
    const [medias, setMedias] = useState([]);
    // const [loading, setLoading] = useState(true);
    

    const alunos = [
        { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
        { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
        { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } }
    ];

//essa funçao serve para fazer o comparativo das notas e o calculo e retorna os alunos que passaram
    const renderAlunosAcimaMedia = () => {
        const nomesAcimaMedia = [];

        for (let i = 0; i < medias.length; i++) {
            if (medias[i] >= 6.0) {
                nomesAcimaMedia.push(<p key={i}>{alunos[i].nome}</p>);
            }
        }

        return nomesAcimaMedia;
    };

    return (
        <div>
            <h2>Alunos Acima da Média</h2>
            {loading ? <p>Carregando..</p> : renderAlunosAcimaMedia()}
        </div>
    );
};

function Questao01Y ({alunos}) {
   // o useEffect serve para calcular e carregar as medias dos alunos 
    useEffect(() => {
        setLoading(true);

        const medias = alunos.map(aluno => (aluno.notas.ap1 + aluno.notas.ap2) / 2);
        
        setMedias(medias);
        setLoading(false);
    }, []);

    render() ;
        return (
            <div>
                <h1> medias: {medias} </h1>
            </div>
        )
    
}

export default Questao01X;