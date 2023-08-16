import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const Characters = () => {
  const { isLoading, error, data } = useQuery(["repoData"], () =>
    fetch(`https://rickandmortyapi.com/api/character`).then((res) => res.json())
  );

  error && console.log(error);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          {data?.results?.map(
            (char: {
              image: string | undefined;
              id: number;
              name:
                | string
                | number
                | boolean
                | ReactElement<string | JSXElementConstructor<unknown>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined;
            }) => {
              return (
                <div>
                  <img style={{ width: "500px" }} src={char.image} alt="" />
                  <Link to={`${char.id}`}>Char name: {char?.name}</Link>
                </div>
              );
            }
          )}
        </>
      )}
    </>
  );
};

export default Characters;
