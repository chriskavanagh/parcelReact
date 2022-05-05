import axios from "axios";
import { useQuery } from "react-query";
import React, { useState } from "react";
//import usePeopleData from "../hooks/usePeopleData";

const fetchPeople = (p) => {
  return axios.get(`https://randomuser.me/api/?page=${p}&results=10`);
};

/* const fetchPeople = () => {
  return axios.get(`https://randomuser.me/api/?page=1&results=10`);
}; */

function Pagination() {
  const [pageNum, setPageNum] = useState(1);
  console.log(pageNum);

  const { isLoading, error, isPreviousData, hasNextPage, data } = useQuery(
    ["people", pageNum],
    () => fetchPeople(pageNum),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <h3 style={{ color: "red", textAlign: "center" }}>Loading. . .</h3>;
  }
  if (error) {
    return (
      <h3 style={{ color: "red", textAlign: "center" }}>
        Error! {error.message}
      </h3>
    );
  }
  return (
    <div style={styles.wrapper}>
      <h1>React Query Pagination Example</h1>
      <div className="dataWrapper">
        <ul>
          {data.data.results.map((person) => (
            <li key={person.phone.toString()} style={{ color: "red" }}>
              {person.name.title} {person.name.first} {person.name.last}
            </li>
          ))}
        </ul>
        <div style={styles.btn}>
          <button
            style={styles.btns}
            onClick={() => setPageNum((page) => page - 1)}
            disabled={pageNum === 1}
          >
            Prev Page
          </button>
          <button
            style={styles.btns}
            onClick={() => setPageNum((page) => page + 1)}
            disabled={pageNum === 10}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  btns: {
    padding: "5px 10px",
  },
  btnsLast: {
    marginLeft: "1rem",
  },
};
