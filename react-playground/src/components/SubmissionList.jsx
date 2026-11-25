function SubmissionList({ items }) {
  return (
    <div className="card list">
      <h2>Messages envoyés ({items.length})</h2>
      {items.length === 0 ? (
        <p className="empty">Rien d'envoyé pour le moment.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id} className="fade-in">
              <div>
                <strong>{item.name}</strong>
                <p>{item.message}</p>
              </div>
              <span className="time">{item.time}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SubmissionList
