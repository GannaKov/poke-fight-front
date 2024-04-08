import { useNavigate, useLoaderData } from "react-router-dom";

const SinglePokemonPage = () => {
  const singlePokemon = useLoaderData();
  return (
    <div>
      <p>{singlePokemon._id}</p>
    </div>
  );
};

export default SinglePokemonPage;
