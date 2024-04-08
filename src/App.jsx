import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AllPokemonsPage from "./pages/AllPokemonsPage/AllPokemonsPage";

import SinglePokemonPage from "./pages/SinglePokemonPage/SinglePokemonPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PokemonInfoPage from "./pages/PokemonInfoPage/PokemonInfoPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";

// import {
//   getAllPokemonsLoder,
//   getPokemonInfoByTypeLoader,
//   getSinglePokemonLoader,
// } from "./services/requests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <NotFoundPage />,

    children: [
      {
        errorElement: <NotFoundPage />,
        children: [
          {
            index: true,
            Component: HomePage,
            // loader: getCategoriesLoder,
          },
          {
            path: "/pokemon",

            // Component: UsersPage,

            children: [
              {
                index: true,
                element: <AllPokemonsPage />,
                // loader: getLimitedAnimalsLoader,
              },
              {
                path: "/pokemon/:id",
                element: <SinglePokemonPage />,
                // loader: getByTypeLoader,
              },
              {
                path: "/pokemon/:id/:info",
                element: <PokemonInfoPage />,
                // loader: getSinglePetLoader,
              },
            ],
          },
          // { path: "/contact-form", element: <ContactFormPage /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
