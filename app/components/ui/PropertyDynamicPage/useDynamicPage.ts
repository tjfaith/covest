"use client";
import { redirect, useParams, useRouter } from "next/navigation";
import { PropertyServices } from "@/app/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store";
import { PropertyInstance } from "@/app/functions/interface";
import { updatePropertyPaymentDetails, updateSelectedProperty } from "@/app/Store/Features/propertySlice";

function useDynamicPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { selectedProperty } = useSelector(
    (state: RootState) => state.property
  );

  const property_id = useParams().property_id as string;
  const [details, setDetails] = useState<any>({});
  const [showBuy, setShowBuy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<any>([]);

  const updateSlideImage = (images: Record<string, string>[]) => {
    for (const key in images) {
      const slideImage = {
        original: images[key].url,
        thumbnail: images[key].thumbnailUrl,
        thumbnailWidth: 10,
        thumbnailHeight: 10,
      };
      setImages([...images, slideImage]);
    }
  };

  const prepProperty = (selectedProperty: PropertyInstance) => {
    setDetails({
      ...selectedProperty,
      property_details: JSON.parse(selectedProperty.property_details as string),
    });
    updateSlideImage(JSON.parse(selectedProperty.images));
    setLoading(false);
  };

  const singleProperty = async () => {
    setLoading(true);
    dispatch(updatePropertyPaymentDetails({
      noOfUnit: 0,
      totalAmountPayable: 0.00,
      estimateROI: 0.00,
      propertyId:''
    }))

    if (Object.keys(selectedProperty).length > 0) {
      await prepProperty(selectedProperty);
    } else {
      await PropertyServices()
        .singleProperty(property_id)
        .then(
          (response) => {
            prepProperty(response.data.data);
            dispatch(updateSelectedProperty(response.data.data));
          },
          (error) => {
            if (error.response.status === 404) {
              router.push("/dashboard/buyProperty");
            }
            error.response.data.error
              ? toast(error.response.data.error)
              : toast(error.response.data.message);
          }
        );
    }
    setLoading(false);
  };

  useEffect(() => {
    singleProperty();
  }, []);
  return { images, details, showBuy, loading,router, setShowBuy };
}

export default useDynamicPage;
