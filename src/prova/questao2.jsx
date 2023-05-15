import { useEffect, useState } from "react"

//foi criado duas variaveis de estado que uma serve para mudar a imagem e outra serve para mudar o estado do botão com true e false

const Pokemon = () => {
    const [srcImage, setScrImage] = useState(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`);
    const [virar, setVirar] = useState(false);

    //useEffect serve para a variavel mudar a imagem com um if e else. 

    useEffect(
        () => {
            if (virar == false) {
                setScrImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`);

            }
            else {
                setScrImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png`);
            }
        }
        ,
        [virar]
    )

    return (

        //aqui tem o botão com a imagem 

        <div>
            <img
                src={srcImage}
                alt="Pokemon"
                style={{ width: "400px" }}
            />
            <button
                onClick={() => setVirar((prev) => !prev)} //o prev serve para armazenar o valor anterior do botao e mudar para o inverso desse valor, o ponto de exclamação serve para isso.
            >
                virar!
            </button>
        </div>
    )
}

export default Pokemon