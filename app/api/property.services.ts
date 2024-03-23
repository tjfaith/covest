import api from './api.services';
function PaymentServices() {

	const getProperty = (payload:Record<string, string | number>) => {
		return api.get(`/property/get-all-property?pageNumber=${payload.pageNumber}&pageSize=${payload.pageSize}&propertyType=${payload.propertyType}`);
	};

    const singleProperty = (property_id:string)=>{
        return api.get(`/property/get-single-property/${property_id}`)
    }
	return {
		getProperty,
        singleProperty
	};
}
export default PaymentServices;
