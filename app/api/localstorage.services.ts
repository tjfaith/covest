function LocalStorageServices() {


const getAccessToken = () => localStorage.getItem('access_token');
const setLocalAccessToken = (token: string) => localStorage.setItem('access_token', token);

return {
	getAccessToken,
	setLocalAccessToken,
};
}
export default LocalStorageServices;
