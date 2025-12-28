import './App.css'
import { Layout } from './components/Layout'
import { RouterProvider } from 'react-router-dom'
import { FavoriteProvider } from './context/FavoriteContext'

function App() {

  return (
    <div>
      <FavoriteProvider>
             
             <RouterProvider router={Layout}/>

      </FavoriteProvider>
    </div>
  )
}

export default App
