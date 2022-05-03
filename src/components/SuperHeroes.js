import React from "react";

export default function SuperHeroes() {
  const [data, setData] = React.useState([]);
  console.log(data);

  const fetchList = () => {
    fetch("db.json", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })

      .then(function (myJson) {
        console.log(myJson);
        const { superheroes } = myJson;
        setData(superheroes);
      });
  };

  React.useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <h1>Meet Our SuperHeroes</h1>
      <div>
        <ul>
          {data.map((hero, index) => (
            <li style={{ color: "red" }} key={index.toString()}>
              {hero.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
