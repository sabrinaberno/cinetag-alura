import { createContext, useContext, useState } from "react";

// contexto = funcionalidade que permite compartilhar estados e valores
// o Context fornece uma maneira de passar dados pela árvore de componentes sem ter que passar props manualmente em todos os níveis
export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider
        value={{favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

// criação de um hook personalizado
export function useFavoritoContext(){
    const { favorito, setFavorito } = useContext(FavoritosContext);
    
    function adicionarFavorito(novoFavorito) {
        //.some returna true se for achado
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)
        
        let novaLista = [...favorito];
        
        // se o item não existe na lista, ele é adicionado 
        if(!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }
        
        // se o item já existir na lista, ele é removido
        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
        return setFavorito(novaLista);
    }
    return {
        favorito,
        adicionarFavorito
    }
}