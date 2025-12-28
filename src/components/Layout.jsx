import {createBrowserRouter} from "react-router-dom"
import Body from "./Body"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"


export const Layout = createBrowserRouter([

    {
        path:"/",
        element:<Body/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"favorites",
                element:<Favorites/>
            }
        ]
    }
])