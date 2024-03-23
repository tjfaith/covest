import api from './api.services';
function PaymentServices() {

	const initiatePayment = (payload:Record<string, string | number | boolean>) => {
		return api.post('payment/initiate-payment', payload);
	};

	const verifyPayment = (payload:Record<string, string | number>)=>{
		return api.post('payment/verify-payment', payload)
	}	
	return {
		initiatePayment,
		verifyPayment
	};
}
export default PaymentServices;
