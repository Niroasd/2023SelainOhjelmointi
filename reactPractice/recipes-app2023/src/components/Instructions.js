const Instructions = ({ data = [] }) => (
    <section className="instructions">
      <h2>Cooking Instructions</h2>
      {data.map((step, i) => (
        <p key={i}>{step}</p>
      ))}
    </section>
  );