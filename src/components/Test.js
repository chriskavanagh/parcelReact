import classes from "./styles/Test.module.css";

export default function Test() {
  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Test</h1>
        <h3>Try Our Test!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos
          animi provident ipsam delectus, modi maiores, velit saepe
          necessitatibus nemo officiis dolore repellendus molestias inventore
          sequi facilis nisi voluptatem esse!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos
          iusto dolore repellat suscipit pariatur et aut quod alias fuga.
          Excepturi sed iste illum asperiores vitae consequatur, earum
          voluptatum alias.
        </p>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </div>
    </section>
  );
}
