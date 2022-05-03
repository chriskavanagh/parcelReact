import React from "react";
import * as classes from "./styles/Languages.module.css";

export default function Languages() {
  const [data, setData] = React.useState([]);

  const fetchList = async () => {
    const results = await fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const lang = await results.json();
    setData(lang);
  };

  React.useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className={classes.wrapper}>
      <h1>Languages</h1>
      <ul className={classes.ul}>
        {data.map((languages) => (
          <li key={languages.id.toString()} className={classes.lis}>
            {languages.name} - {languages.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
