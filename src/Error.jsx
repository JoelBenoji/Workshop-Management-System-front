import "./styles/error.css";

export default function Error() {
  return (
    <div className="error">
      <h2>404</h2>
      <p className="not-found">Page not found</p>
      <div className="text-error">
        <p>Looks like the page you are Looking for does not exist</p>
        <p>
          Enjoy this beautiful Koenigsegg Regera R instead
        </p>
        <div className="button">
        <a className="btn-home" href="/">Back to Home</a>
        </div>
      </div>
    </div>
  );
}
