//사용자에 따른 경로 지정
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({allowedRoles}) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
      // 등록된 유저에 따라
      // auth?.user
      // 권한에따라
      auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
        <Outlet />
      ) : auth?.user ? (
        <Navigate to="unauthorized" state={{ from: location }} replace />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )
      // state이게 없으면 뒤로가기해도 전 페이지로 이동 안됨
    );

}

export default RequireAuth;