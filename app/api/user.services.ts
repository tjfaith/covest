import api from './api.services';
function AuthServices() {

	const userData = () => {
		return api.get('/users/user-data');
	};

	return {
		userData
	};
}
export default AuthServices;
