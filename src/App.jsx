import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AllPokemonsPage from "./pages/AllPokemonsPage/AllPokemonsPage";

import SinglePokemonPage from "./pages/SinglePokemonPage/SinglePokemonPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PokemonInfoPage from "./pages/PokemonInfoPage/PokemonInfoPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import AllGamesScorePage from "./pages/AllGamesScorePage/AllGamesScorePage";
import {
  getAllPokemonsLoder,
  getPokemonInfoByTypeLoader,
  getSinglePokemonLoader,
  getAllGamesScoreLoder,
} from "./services/requests";

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
            loader: getAllPokemonsLoder,
          },
          {
            path: "/pokemon",

            // Component: UsersPage,

            children: [
              {
                index: true,
                element: <AllPokemonsPage />,
                loader: getAllPokemonsLoder,
              },
              {
                path: "/pokemon/:id",
                element: <SinglePokemonPage />,
                loader: getSinglePokemonLoader,
              },
              {
                path: "/pokemon/:id/:info",
                element: <PokemonInfoPage />,
                loader: getPokemonInfoByTypeLoader,
              },
            ],
          },
          {
            path: "/game/leaderboard",

            // Component: UsersPage,

            children: [
              {
                index: true,
                element: <AllGamesScorePage />,
                loader: getAllGamesScoreLoder,
              },
            ],
          },
          // { path: "/contact-form", element: <ContactFormPage /> },
        ],
      },
    ],
  },
  { path: "*", Component: SharedLayout },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
