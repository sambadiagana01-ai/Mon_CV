function Experiences({ liste }) {
  return (
    <section className="carte" id="experiences">
      <h2>Expériences</h2>
      {liste.map((exp) => (
        <article className="experience" key={exp.id}>
          <h3>{exp.poste}</h3>
          <p className="meta">
            {exp.entreprise} · {exp.periode}
          </p>
          <p>{exp.description}</p>
        </article>
      ))}
    </section>
  )
}

export default Experiences