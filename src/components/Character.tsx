import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const Character = () => {
  const { charId } = useParams();
  const { isLoading, error, data } = useQuery(["repoData"], () =>
    fetch(`https://rickandmortyapi.com/api/character/${charId}`).then((res) =>
      res.json()
    )
  );

  console.log(error);
  const character = data;

  return (
    <>{isLoading ? <p>Loading</p> : <div>Char name: {character?.name}</div>}</>
  );
};

export default Character;
