import { useNavigate, useRouteError } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div>
      <h1>Oops something went wrong :(</h1>
      <h2>We are all lost somewhere in our journey</h2>
      <h3>{error.status + " " + error.statusText}</h3>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}
