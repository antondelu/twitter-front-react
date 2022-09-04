import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ redirectPath = "/" }) {
  const store = useSelector((state) => state);
  const token = store.login.token;
  if (!token) {
    alert("credenciales invalidas");
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
