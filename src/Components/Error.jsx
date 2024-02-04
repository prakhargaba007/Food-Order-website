function Error({ tital, message }) {
  return (
    <div className="error">
      <h2>{tital}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Error;
