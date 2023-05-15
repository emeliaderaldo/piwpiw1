import React, { useEffect, useState } from "react";

const Populacao = () => {

    // variavel para armazenar 

    const [pop, setPop] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
            .then((response) => response.json()) 
            .then((pop) => setPop(pop))
            .catch((error) => console.log(error));
    }, []);


    const procuraMinMax = () => {
        if (pop.length === 0) { //aqui percorre investigando os itens que tem em pop para depois analisalos
            return null;
        }

        let max = -Infinity; //variavel para armazenar a maior e a menor populacao, ela eh infinita pois nao sabemos o quanto pode ser o maior nem o menor, entao qualquer valor eh possivel
        let min = Infinity;
        let capitalMax = ""; 
        let capitalMin = "";

        // aqui acontece o calculo da maior e menor populaçao, com um if ele vai investigar atravez de um contador 
        pop.forEach((country) => {
            const population = country.population; 
            const capital = country.capital[0];
            if (population > max) { //aqui é verificado a maior capital, e sempre que alguma capitual é maior que a anterior comparada ele sobreencreve a capital
                max = population;
                capitalMax = capital;
            }
            if (population < min) { //aqui é feito basicamente a mesma coisa, porém, para a menor
                min = population;
                capitalMin = capital;
            }
        });

        return { capitalMax, capitalMin }; // aqui retorna
    };

    const capitals = procuraMinMax(); // variavel para mostrar de forma mais resumida o resultado

    return (
        <div>
            {capitals && (
                <div>
                    <p>Capital com Maior População: {capitals.capitalMax}</p>
                    <p>Capital com Menor População: {capitals.capitalMin}</p>
                </div>
            )}
        </div>
    );
};

export default Populacao;