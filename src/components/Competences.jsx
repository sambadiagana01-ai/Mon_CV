function Competences({ liste }) {
  return (
    <section className="carte" id="competences">
      <h2>Compétences</h2>
      <ul className="competences">
        {liste.map((c) => (
          <li key={c.id}>
            <div className="ligne">
              <span>{c.nom}</span>
              <span>{c.niveau}%</span>
            </div>
            <div className="barre">
              <div className="barre-remplie" style={{ width: `${c.niveau}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Competences