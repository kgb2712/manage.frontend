import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {  Categorie, Clien, Commande, CreateCategories,CreateClins,CreateCommande, CreateFournisseurs, CreatePersonnels, CreateProduits, EditerCategorie, EditerClin, EditerCommande, EditerPersonnel, EditerProduit, Enregistrements, FormulaireProduits, Fournisseurs, Home, Login, MainLayout, Persons, Produits } from "./pages"



export const url = 'http://127.0.0.1:4000 ';

function App() {
const routers = useMemo(()=>createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/formulaire',
    element:<Enregistrements/>
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
        path:"createProduits",
        element:<Produits/>
      },
      {
        path:"formulaire",
        element:<FormulaireProduits/>
      },
      {
        path:"personn",
        element:<Persons/>
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
        element:<Fournisseurs/>
      },
      {
        path:"creerFournisseur",
        element:<CreateFournisseurs/>
      },
      {
        path:"editerProduits/:id",
        element:<EditerProduit/>
      },
      {
        path:"editerCategorie/:id",
        element:<EditerCategorie/>
      },
      {
        path:"createKategorie",
        element:<CreateCategories/>
      },
      {
        path:"createPersonnelles",
        element:<CreatePersonnels/>
      },
      {
        path:"editePersonnel/:id",
        element:<EditerPersonnel/>
      },
      {
        path:"editecommande/:id",
        element:<EditerCommande/>
      },
      {
        path:"clientt",
        element:<Clien/>
      },
      
      {
        path:"ajouterClient",
        element:<CreateClins/>
      },
      {
        path:"editionClien",
        element:<EditerClin/>
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
