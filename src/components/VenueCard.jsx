import { Heart } from 'lucide-react'
import { useFavorites } from '../context/FavoriteContext'

function VenueCard({venue,fromHome}) {
    const {name,kilometres,logo,id,address,rating,sports,price}=venue
    const {toggleFavorites,isFavorite}= useFavorites()

   
    
  return (
    <div className='bg-neutral-primary-soft block  w-sm max-w-sm h-80 p-6 border border-default  rounded-md shadow-xs m-2'>
     <div className='flex justify-between items-center'>
        <img className='rounded-full w-15 h-15 bg-cover ' src={logo} alt="logo" />
        {
            fromHome&&(
                <button className='cursor-pointer' onClick={()=>toggleFavorites(venue)}>
                        <Heart
                            className={`transition-colors duration-300 ${
                                isFavorite(id)?"fill-pink-500" : "fill-none stroke-gray-400"
                            }`}            
                        />
                </button>
            )
        }
        
        </div>  
        <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">{name}</h5>

        <p class="text-body mb-6">{address}</p>

        <h3 className='font-semibold'>{

           sports.map((item,index)=>(
             <span key={index}>{item} : RS {price[item]} <br /> </span>
           ))
        }
        </h3>

         <p>Rating : {rating}</p>
        <p>distance : {kilometres} KM</p>
    </div>
  )
}

export default VenueCard