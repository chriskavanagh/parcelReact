import React from "react";
//import useFetchData from "./services/data";
import { useQuery } from "react-query";

export default function MyData() {
  const fetchList = async () => {
    const results = await fetch(`https://randomuser.me/api/?results=10`);
    return results.json();
  };

  const { data, isLoading, error } = useQuery("list", fetchList);

  if (isLoading) {
    return <h3 style={{ color: "red" }}>Loading. . .</h3>;
  }
  if (error) {
    return <h3 style={{ color: "red" }}>Error! {error.message}</h3>;
  }
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {data.results.map((obj) => (
          <li
            key={obj.id.value.toString()}
            style={{ color: "white", margin: "1.5rem" }}
          >
            <h2>
              {obj.name.title} {obj.name.first} {obj.name.last}
            </h2>
            <h3>{obj.email}</h3>
            <img src={obj.picture.thumbnail} style={{ marginBottom: "1rem" }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* export default function MyData() {
  const { data, loading, error } = useFetchData();
  console.log(error);
  return (
    <div>
      {loading ? (
        <h2 style={{ color: "red" }}>Loading. . .</h2>
      ) : (
        <ul>
          {data.map((obj) => (
            <li key={obj.id} style={{ color: "white" }}>
              {obj.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} */
