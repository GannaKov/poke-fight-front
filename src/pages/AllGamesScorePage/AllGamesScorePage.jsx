import { useLoaderData } from "react-router-dom";

const AllGamesScorePage = () => {
  const allGamesResult = useLoaderData();

  return (
    <div>
      <p> Statistics</p>
      <ul>
        {" "}
        {allGamesResult.map(
          ({ participents, pokWinner, winner, score, _id }) => (
            <li key={_id}>
              <p>
                {participents.pok1.name}&nbsp;:&nbsp;{participents.pok2.name}
              </p>
              <p>
                Score:&nbsp;{score[0]}&nbsp;:&nbsp;{score[1]}
              </p>
              <p>
                Winner:&nbsp;{winner} with pokemon {pokWinner.name}
              </p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default AllGamesScorePage;
