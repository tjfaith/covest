import api from './api.services';
function AuthServices() {

	const signup = (signUpData: Record<string, string>) => {
		console.log(signUpData, 'SIGNUP DATA...')
		return api.post('/auth/signup', signUpData);
	};

	const login = (loginData: Record<string, string>) => {
		return api.post('/auth/login', loginData);
	};

	const resendActivationToken = (email: string) => {
		return api.post('/auth/resend-activation-token', { email });
	};

	const verifyEmail = (token:string)=>{
		return api.get(`/auth/verify-email/${token}`)
	}



	const googleLogin = (idToken: string) => {
		return api.post('/user/google-login', { idToken });
	};


	const forgotPassword = (email: string) => {
		return api.post('/user/forgot-password', { email });
	};

	const resetPassword = (payload: Record<string, string | undefined>, token: string) => {
		return api.patch('/user/reset-password/' + token, payload);
	};

	const sendOTPUser = (purpose:string)=>{
		return api.post('/user/sendOTPUser',{purpose});

	};

	const logout = () => {
		localStorage.clear();
	};

	return {
		googleLogin,
		sendOTPUser,
		login,
		signup,
		logout,
		resendActivationToken,
		verifyEmail,
		forgotPassword,
		resetPassword,
	};
}
export default AuthServices;
