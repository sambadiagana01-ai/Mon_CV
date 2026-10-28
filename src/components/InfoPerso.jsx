function InfoPerso({ info }) {
  return (
    <section className="carte" id="info-perso">
      <h1>{info.nom}</h1>
      <p className="titre">{info.titre}</p>
      <p>{info.presentation}</p>
      <ul className="contacts">
        <li>✉️ {info.email}</li>
        <li>📞 {info.telephone}</li>
        <li>📍 {info.ville}</li>
      </ul>
    </section>
  )
}

export default InfoPerso