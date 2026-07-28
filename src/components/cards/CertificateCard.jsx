const CertificateCard = ({ title, issuer, year, credentialLink }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{title}</h3>

      <p>
        <strong>Issued By:</strong> {issuer}
      </p>

      <p>
        <strong>Year:</strong> {year}
      </p>

      <a href={credentialLink} target="_blank" rel="noreferrer">
        View Certificate
      </a>
    </div>
  );
};

export default CertificateCard;