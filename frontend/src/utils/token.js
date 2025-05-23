// Fonction pour décoder le token JWT
export const decodeJWT = (token) => {
    try {
      if (!token) return {};
      
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        window.atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Erreur de décodage du token:", error);
      return {};
    }
  };
  
  // Fonction pour obtenir le token depuis le stockage
  export const getToken = () => {
    return localStorage.getItem("token") || sessionStorage.getItem("token") || "";
  };