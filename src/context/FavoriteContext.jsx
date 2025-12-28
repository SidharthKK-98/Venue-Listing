import { createContext, useContext,useState } from "react";

const FavoriteContext = createContext(null)

export const FavoriteProvider =({children})=>{

    const [favorites,setFavorites] = useState([])

    const toggleFavorites=(venue)=>{

        setFavorites((prev)=>{
            const exist = prev.some((item)=>item.id === venue.id)

            if(exist){
                alert("already added in wishlist")
                return prev
            }
            else{
               return [venue,...prev]
            }

        })
    }

    const removeFromFavorites=()=>{

        setFavorites((prev)=>{
            if(prev.length==0)return prev
            return prev.slice(1)
        })
    }

        const isFavorite = (id)=>{
            return favorites.some((item)=>item.id === id)
        }

        return(
            <FavoriteContext.Provider value={{favorites,setFavorites,toggleFavorites,isFavorite,removeFromFavorites}}>
                {children}
            </FavoriteContext.Provider>
        )
    }

  


  export const useFavorites = ()=>{
        const context = useContext(FavoriteContext)
        return context
    }