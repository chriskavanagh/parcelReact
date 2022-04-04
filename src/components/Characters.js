import React from "react";
import Character from "./Character";
import { useQuery } from "react-query";

// remake with Grid
// remake with Grid
// remake with Grid
// remake with Grid
function Characters() {
  const [page, setPage] = React.useState(1);
  //const [characters, setCharacters] = useState([]);
  // console.log(`page: ${JSON.stringify(page)}`);

  const fetchCharacters = async ({ queryKey }) => {
    console.log(queryKey);
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  const { data, isLoading, error, isPreviousData } = useQuery(
    ["characters", page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );
  console.log(`isPreviousData ${isPreviousData}`);
  //console.log(`info: ${JSON.stringify(data.info.next)}`);

  if (isLoading) {
    return <h3 style={{ color: "red" }}>Loading. . .</h3>;
  }

  if (error) {
    return <h3 style={{ color: "red" }}>{error.message}</h3>;
  }

  return (
    <>
      <h1 style={styles.title}>Rick & Morty Characters</h1>

      <div className="characters">
        {data.results.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
      <button
        onClick={() => setPage((old) => old - 1)}
        disabled={page === 1}
        style={styles.btn}
      >
        Previous
      </button>

      <button
        onClick={() => setPage((old) => old + 1)}
        disabled={!data.info.next}
        style={styles.btn}
      >
        Next
      </button>
    </>
  );
}

export default Characters;

const styles = {
  title: {
    color: "white",
    fontSize: "3rem",
    textAlign: "center",
    marginBottom: "5rem",
    fontWeight: "900",
    lineHeight: "1",
  },
  btn: {
    margin: "1rem",
    padding: ".6rem 1rem",
  },
};
