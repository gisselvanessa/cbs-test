// app/context/SessionContext.tsx
"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

type SessionContextType = {
  session: { userId: string } | null;  
  login: (userId: string) => void;     // Solo almacenamos el userId
  logout: (redirect?: boolean) => void;
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<{ userId: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    // El servidor validará el token y nos devolverá si el usuario está autenticado
    const checkSession = async () => {
      try {
        const response = await fetch('/api/session', { credentials: 'include' });
        if (response.ok) {
          const data = await response.json();
          setSession({ userId: data.userId });
        } else {
          logout();  // Si la sesión no es válida, redirigimos al usuario
        }
      } catch (error) {
        console.error("Error al verificar la sesión", error);
        logout();
      }
    };

    checkSession(); // Verificamos la sesión cuando se monta el componente
  }, []);

  const login = (userId: string) => {
    setSession({ userId });
  };

  const logout = (redirect = true) => {
    // Solo eliminamos la sesión en el cliente, el backend se encarga de invalidar la cookie
    setSession(null);
    if (redirect) router.push("/");  // Redirigimos al usuario
  };

  return (
    <SessionContext.Provider value={{ session, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
