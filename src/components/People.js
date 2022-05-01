import React from "react";
import * as classes from "./styles/People.module.css";
import { usePeopleData } from "../hooks/usePeopleData";

export default function People() {
  //const { data, isLoading, error } = useQuery("list", fetchList);
  //const queryClient = useQueryClient();
  const { data, isLoading, error } = usePeopleData();
  //console.log(data.results);

  if (isLoading) {
    return <h3 style={{ color: "red" }}>Loading. . .</h3>;
  }
  if (error) {
    return <h3 style={{ color: "red" }}>Error! {error.message}</h3>;
  }

  return (
    <div>
      <h1 className={classes.title}>Meet Our Employees</h1>
      <ul className={classes.listWrapper}>
        {data.results.map((obj, index) => (
          <li
            className={classes.list}
            key={obj.phone.toString()}
            style={{ color: "white", margin: "1.7rem" }}
          >
            <h2 className={classes.name}>
              {obj.name.title} {obj.name.first} {obj.name.last}
            </h2>
            <h3 className={classes.email}>{obj.email}</h3>
            <img className={classes.pic} src={obj.picture.thumbnail} />
          </li>
        ))}
      </ul>
    </div>
  );
}
