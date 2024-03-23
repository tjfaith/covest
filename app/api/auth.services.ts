import api from "./api.services";
function AuthServices() {
  const signup = (signUpData: Record<string, string>) => {
    return api.post("/auth/signup", signUpData);
  };

  const login = (loginData: Record<string, string>) => {
    return api.post("/auth/login", loginData);
  };

  const resendActivationToken = (email: string) => {
    return api.post("/auth/resend-activation-token", { email });
  };

  const verifyEmail = (token: string) => {
    return api.get(`/auth/verify-email/${token}`);
  };

  const initiateForgotPassword = (email: string) => {
    return api.post("/auth/initiate-forgot-password", { email });
  };

  const resetPassword = (payload: Record<string, string | null>) => {
    return api.post("/auth/reset-password", payload);
  };

  const updatePassword = (payload: Record<string, string>) => {
    return api.post("/auth/update-password", payload);
  };

  const googleAuth = (idToken: string) => {
    return api.post("/auth/google-auth", { idToken });
  };

  return {
    signup,
    login,
    resendActivationToken,
    verifyEmail,
    initiateForgotPassword,
    resetPassword,
    updatePassword,
    googleAuth,
  };
}
export default AuthServices;
