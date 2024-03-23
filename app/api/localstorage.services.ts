function LocalStorageServices() {

const getAccessToken = () => typeof window !== "undefined" ? window.localStorage.getItem('access_token') : false
const setLocalAccessToken = (token: string) => window?.localStorage?.setItem('access_token', token);

const setAccountEmail = (email:string) => window?.localStorage.setItem('account_email', email);
const getAccountEmail = () => typeof window !== "undefined" ? window?.localStorage?.getItem('account_email') : ""

return {
	getAccessToken,
	setLocalAccessToken,

	setAccountEmail,
	getAccountEmail
};
}
export default LocalStorageServices;
