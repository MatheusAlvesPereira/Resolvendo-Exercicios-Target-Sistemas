import Home from "../home";
import React, { useState, useEffect } from "react";
import dados from './dados.json';
import './Exercicio3.css'

const Faturamento = () => {
  const [minFaturamento, setMinFaturamento] = useState(0);
  const [maxFaturamento, setMaxFaturamento] = useState(0);
  const [diasAcimaMedia, setDiasAcimaMedia] = useState(0);

    useEffect(() => {
        let totalFaturamento = 0;
        let diasComFaturamento = 0;
        let diasAcimaMedia = 0;
        let menorFaturamento = Infinity;
        let maiorFaturamento = -Infinity;

        dados.forEach((item) => {
            if (item.valor > 0) {
                totalFaturamento += item.valor;
                diasComFaturamento++;

                if (item.valor > maiorFaturamento) {
                setMaxFaturamento(item.valor);
                }

                if (item.valor < menorFaturamento) {
                setMinFaturamento(item.valor);
                }
            }
        });

        const mediaFaturamento = totalFaturamento / diasComFaturamento;

        dados.forEach((item) => {
            if (item.valor > mediaFaturamento) {
                diasAcimaMedia++;
            }
        });

        setDiasAcimaMedia(diasAcimaMedia);
    }, []);

    const handleMinFaturamento = () => {
        let menorFaturamento = Infinity;
    
        dados.forEach((item) => {
            if (item.valor > 0 && item.valor < menorFaturamento) {
                menorFaturamento = item.valor;
            }
        });
    
        setMinFaturamento(menorFaturamento);
    };

    const handleMaxFaturamento = () => {
        let maiorFaturamento = -Infinity;
      
        dados.forEach((item) => {
          if (item.valor > 0 && item.valor > maiorFaturamento) {
            maiorFaturamento = item.valor;
          }
        });
      
        setMaxFaturamento(maiorFaturamento);
    };

    return (
        <>
            <Home/>
            <h2 className="text">Faturamento do arquivo Dados.Jason</h2>

            <div className="app__faturamento">
                <p>Menor valor de faturamento: {minFaturamento}</p>
                <button onClick={handleMinFaturamento}>Menor valor</button>

                <p>Maior valor de faturamento: {maxFaturamento}</p>
                <button onClick={handleMaxFaturamento}>Maior valor</button>

                <p>Número de dias acima da média: {diasAcimaMedia}</p>
            </div>
        </>
    )
}
export default Faturamento;