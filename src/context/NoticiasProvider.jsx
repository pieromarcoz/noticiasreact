import { useState, createContext, useEffect } from 'react';
import axios from "axios";

const NoticiasContext = createContext()
const NoticiasProvider = ({children}) => {
    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalNoticias, setTotalNoticias] = useState(0)
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        if (isInitialLoad) {
            // Realiza una consulta inicial con la categoría "General" solo al montar el componente
            const consultarAPI = async () => {
                try {
                    const url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${import.meta.env.VITE_API_KEY}`;
                    const { data } = await axios(url);
                    // Actualiza las noticias después de la consulta
                    setNoticias(data.articles);
                } catch (error) {
                    // Maneja errores si es necesario
                }
            };

            consultarAPI();
            setIsInitialLoad(false);
        }
    }, [ isInitialLoad]);
    const consultarAPI = async () => {
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`;
            const { data } = await axios(url);
            setNoticias(data.articles);
            setTotalNoticias(data.totalResults)
            setPagina(1)
        } catch (error) {

        }
    };
    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&pageSize=20&apiKey=${import.meta.env.VITE_API_KEY}`;
            const { data } = await axios(url);
            setNoticias(data.articles);
            setTotalNoticias(data.totalResults)
        }
        consultarAPI()
     }, [pagina])
    const handleSubmit = (e) => {
        e.preventDefault();
        // Realiza la consulta API cuando se envía el formulario
        consultarAPI();
    };
    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }
    const handleChangePagina = (e, valor) => {
        setPagina(valor)
    }
    return(
        <NoticiasContext.Provider value={{
            categoria,
            handleSubmit,
            handleChangeCategoria,
            noticias,
            totalNoticias,
            handleChangePagina,
            pagina
        }}>
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}
export default NoticiasContext