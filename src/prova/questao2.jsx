import { useEffect, useState } from "react"

//foi criado duas variaveis de estado que uma serve para mudar a imagem e outra serve para mudar o estado do botão com true e false

const Pokemon = () => {
    const [srcImage, setScrImage] = useState(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`);
    const [flag, setFlag] = useState(false); //atribui o valor da variavel como false para conseguir reverter esse valor e ela se tornar mutavel

    //useEffect serve para a variavel mudar a imagem com um if e else. 

    useEffect(
        () => {

            if (flag == false) { // aqui eh identificado o valor da variavel e qual imagem eh para aparecer, se eh a de frente ou a de costas
                setScrImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`);

            }
            else {
                setScrImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png`);
            }
        }
        ,
        [flag]
    )

    return (

        //aqui retornará o botão e a imagem 

        <div>
            <img
                src={srcImage}
                alt="Pokemon"
                style={{ width: "400px" }}
            />
            <button
                onClick={() => setFlag((prev) => !prev)} //o prev serve para armazenar o valor anterior do botao e mudar para o inverso desse valor, o ponto de exclamação serve para isso.
            >
                mexa o Pokemon
            </button>
        </div>
    )
}

export default Pokemon