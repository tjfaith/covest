import api from './api.services';
function PaymentServices() {

	const initiatePayment = (payload:Record<string, string | number | boolean>) => {
		return api.post('payment/initiate-payment', payload);
	};


	return {
		initiatePayment,
	};
}
export default PaymentServices;
