import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.error("Route Error:", err); // Improved logging

  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>{err?.status || 'No status available'} ErrorMessage: {err?.statusText || 'No status text available'}</h2>
    </div>
  );
};

export default Error;
