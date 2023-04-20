import React from 'react'


export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
    const [dados, setDados] = React.useState(null);

    React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/`)
     .then((res) => res.json())
     .then((res) => setDados(res))}, [])

    function limpaDados() {
        setDados(null);
    }

    return <GlobalContext.Provider value={{dados, setDados, limpaDados}}>
        {children}
        </GlobalContext.Provider>
}