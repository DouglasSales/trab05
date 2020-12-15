import React from "react";
import styled from "styled-components";


const ModelButton = styled.button`
    background: ${({theme}) => theme.backgroundcolor};
    color: ${({theme}) => theme.color};
    border-radios: 30px;
    cursor: pointer;
    font-size: 0.8rem;
    padding: 0.6rem;
`;

const Alternancia = ({temaTexto, alternaciaTema}) => {
    let label = ['Mudar para ', temaTexto === 'Branco' ? 'Escuro' : 'Branco'].join('');
    return (
        <ModelButton onClick={alternaciaTema}>
            {label}
        </ModelButton>
    );
}


export default Alternancia;