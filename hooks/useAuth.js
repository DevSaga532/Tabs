import { useEffect } from "react";
import { useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const status = await getAuthStatus(); // Simulación de una llamada a un servicio de autenticación
        setIsAuthenticated(status);
      } catch (error) {
        console.error("Failed to check auth status:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const signUp=()=>{
    
  }

  return {
    isAuthenticated,
    loading,
  };
};
