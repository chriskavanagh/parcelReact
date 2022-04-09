import React from "react";
import "./styles/characters.css";
import Character from "./Character";
import { useQuery } from "react-query";
//import { useLocation } from "react-router-dom";

// remake with Grid
// remake with Grid
// remake with Grid
// remake with Grid
function Characters() {
  //const location = useLocation();
  console.log(location.state);
  const [page, setPage] = React.useState(1);
  //const [characters, setCharacters] = useState([]);
  // console.log(`page: ${JSON.stringify(page)}`);

  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  const { data, isLoading, error } = useQuery(
    ["characters", page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );
  console.log(data);
  //console.log(`info: ${JSON.stringify(data.info.next)}`);

  if (isLoading) {
    return <h3 style={{ color: "red" }}>Loading. . .</h3>;
  }

  if (error) {
    return <h3 style={{ color: "red" }}>{error.message}</h3>;
  }

  return (
    <>
      <h1 className="topTitle">
        Rick & Morty <span className="top__text">Characters</span>
      </h1>

      <div className="characters">
        {data.results.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
      <div className="btnGroup">
        <button
          onClick={() => setPage((old) => old - 1)}
          disabled={page === 1}
          className="btn btn1"
        >
          Previous
        </button>

        <button
          onClick={() => setPage((old) => old + 1)}
          disabled={!data.info.next}
          className="btn btn2"
        >
          &nbsp; &nbsp;Next&nbsp;&nbsp;&nbsp;
        </button>
      </div>
    </>
  );
}

export default Characters;

/* const styles = {
  title: {
    color: "white",
    fontSize: "3rem",
    textAlign: "center",
    marginBottom: "5rem",
    fontWeight: "900",
    lineHeight: "1",
  },
  btn: {
    padding: ".6rem 1.4rem",
    fontSize: "18px",
    color: "orange",
    float: "left",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "center",
    margin: "3rem auto 3rem auto",
  },
  "btnGroup btn:not(:last-child)": {
    border: "5px solid red",
  },
}; */
