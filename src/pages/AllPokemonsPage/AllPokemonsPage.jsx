import { useNavigate, useLoaderData } from "react-router-dom";

const AllPokemonsPage = () => {
  const allPokemonArr = useLoaderData();
  return (
    <div>
      {allPokemonArr.map((pok) => (
        <p key={pok._id}>{pok._id}</p>
      ))}
    </div>
  );
};

export default AllPokemonsPage;
