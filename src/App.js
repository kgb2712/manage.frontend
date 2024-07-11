import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Article, Categorie, Commande,  CreateCategorie, CreateCommande, CreateFournisseurs, CreateProduits, FormulaireProduits, Home, Login, MainLayout, Produits } from "./pages"
import Fournisseur from "./pages/Fournisseurs/fournisseur.page";

export const url = 'http://127.0.0.1:4000 ';

function App() {
const routers = useMemo(()=>createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },

  
  
  {
    path:'/dashboard',
    element:< MainLayout/>,
    errorElement: <div> not found</div>,

    children :[ 
      {
         path: "",
         element:<Home/> ,
      },
      {
        path:"categories",
        element:<Categorie/>
      },
      {
        path:"createCategorie",
        element:<CreateCategorie/>
      },

      {
        path:"createProduits",
        element:<Produits/>
      },
      {
        path:"formulaire",
        element:<FormulaireProduits/>
      },
      {
        path:"article",
        element:<Article/>
      },
      {
        path:"creerProduits",
        element:<CreateProduits/>
      },
      {
        path:"commande",
        element:<Commande/>
      },
      {
        path:"creercommande",
        element:<CreateCommande/>
      },
      {
        path:"fournisseur",
        element:<Fournisseur/>
      },
      {
        path:"creerFournisseur",
        element:<CreateFournisseurs/>
      },
      
    ]
  },
  
  
  

]),[]);

 


  return (
    <div className="App">
    <RouterProvider router={routers}/>
    </div>
  );
}

export default App;
