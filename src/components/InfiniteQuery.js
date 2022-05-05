import axios from "axios";
import React, { useState } from "react";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";

function InfiniteQuery() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const fetchAllPeople = ({ pageParam = 1 }) => {
    //console.log(pageParam);
    return axios.get(`https://randomuser.me/api/?page=${pageParam}&results=20`);
  };

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery("students", fetchAllPeople, {
    getNextPageParam: (lastPage, pages) => {
      if (pages.length <= 10) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
    return false;
  }, [inView]);

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
    <div>
      <h1>Infinite Query Example</h1>

      {data.pages.map((group, index) => (
        <ul key={index}>
          {group.data.results.map((person, index) => (
            <>
              <li style={{ color: "red" }} key={index.toString()}>
                {person.name.first} {person.name.last}{" "}
              </li>
              <img src={person.picture.thumbnail} />
            </>
          ))}
        </ul>
      ))}
      {/* <button
        onClick={fetchNextPage}
        style={{ marginTop: "2rem", marginBottom: "22rem" }}
      >
        Load More
      </button> */}
      <div ref={ref}>
        <h2 style={{ color: "red" }}>{`Header inside viewport ${inView}.`}</h2>
      </div>
    </div>
  );
}

export default InfiniteQuery;
