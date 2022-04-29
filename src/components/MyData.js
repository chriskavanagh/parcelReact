import React from "react";
//import useFetchData from "./services/data";
import { useQuery } from "react-query";

export default function MyData() {
  const fetchList = async () => {
    const res = await fetch(`https://course-api.com/react-store-products`);
    return res.json();
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
      <ul>
        {data.map((obj) => (
          <li key={obj.id} style={{ color: "white", margin: "1.5rem" }}>
            <h3>{obj.name}</h3>
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
