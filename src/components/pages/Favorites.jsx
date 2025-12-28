import { useFavorites } from "../../context/FavoriteContext"
import VenueCard from "../VenueCard";

function Favorites() {
    const {favorites}=useFavorites()
    const {removeFromFavorites}=useFavorites()
    
  return (
    <div>
        {
            !favorites.length?<h1 className="text-center text-2xl my-auto h-lvh font-semibold">No Favorites </h1>
            :
            <div >
                <div >
                    <button className="rounded-md m-5 p-2 border bg-red-700 text-white" onClick={removeFromFavorites}>Remove Venues</button>
                </div>
                     <div className="flex flex-col justify-center items-center ">
                        {
                            favorites.map((venue)=>(
                                <VenueCard key={venue.key} venue={venue}/>
                            ))
                        }
                    </div>
            </div>
           
        }
    </div>
  )
}

export default Favorites