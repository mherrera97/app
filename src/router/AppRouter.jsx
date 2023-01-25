import { useEffect, useMemo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { GestorRoutes } from '../gestor/routes/GestorRoutes';
import { useAuthStore } from '../hooks';
import { Loader } from '../ui/Loader';


export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);


  if (status === "checking") {
    return (
      <Loader />
    );
  }



  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          {/* Login y Registro */}
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          {/* GestorApp */}
          <Route path="/*" element={<GestorRoutes />} />
        </>
      )}
    </Routes>
  )
}
