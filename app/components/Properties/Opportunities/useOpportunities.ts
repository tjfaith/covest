"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateActivePage } from "@/app/Store/Features/settingsSlice";
import { PropertyServices } from "@/app/api";
import { PropertyInstance } from "@/app/functions/interface";
import { updateSelectedProperty } from "@/app/Store/Features/propertySlice";
import { useRouter } from "next/navigation";

function useOpportunities() {
  const router = useRouter()
  const dispatch = useDispatch();
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(false)
  // PAGINATION
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const [totalItem, setTotalItem] = useState(0)

  
  const getProperties =async()=>{
    setLoading(true)
    const payload={
      pageNumber:currentPage,
      pageSize:itemsPerPage,
      propertyType:'general'
    }
   await PropertyServices().getProperty(payload).then(response=>{
      setProperties(response.data.data.properties)
      setTotalItem(response.data.data.pagination.totalItems)
       setLoading(false)
    }, error=>{
      console.log(error)
      setLoading(false)
    })
  }


  const viewProperty = (selectedProperty:PropertyInstance)=>{
    dispatch(updateSelectedProperty(selectedProperty))
    router.push(`/dashboard/buyProperty/${selectedProperty.id}`)
  }

  useEffect(() => {
    getProperties()
    dispatch(updateActivePage("buy_property"));
  }, []);
  return { properties, currentPage, itemsPerPage,totalItem, loading,viewProperty, setCurrentPage };
}

export default useOpportunities;
