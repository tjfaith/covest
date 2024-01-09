"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateActivePage } from "@/app/Store/Features/settingsSlice";

function useBuyProperty() {
  const dispatch = useDispatch();
const [currentPage, setCurrentPage] = useState(1)
  const properties = [
    {
      title: "4 Bedroom Duplex",
      images: [
        {
          src: "/images/property_images/property.png",
          caption: "",
          featured_image: true,
        },
        {
          src: "/images/property_images/property.png",
          caption: "",
          featured_image: false,
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, eaque asperiores. Eius molestias quam odio reiciendis provident veritatis sit? Quod, aliquam? Minima iste recusandae vero quos sunt esse distinctio nam",
      price: "4500",
      currency: "naira",
    },
    {
      title: "4 Bedroom Duplex",
      images: [
        {
          src: "/images/property_images/property.png",
          caption: "",
          featured_image: true,
        },
        {
          src: "/images/property_images/property.png",
          caption: "",
          featured_image: false,
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, eaque asperiores. Eius molestias quam odio reiciendis provident veritatis sit? Quod, aliquam? Minima iste recusandae vero quos sunt esse distinctio nam",
      price: "4500",
      currency: "naira",
    },
    {
      title: "4 Bedroom Duplex",
      images: [
        {
          src: "/images/property_images/property.png",
          caption: "",
          featured_image: true,
        },
        {
          src: "/images/property_images/property.png",
          caption: "",
          featured_image: false,
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, eaque asperiores. Eius molestias quam odio reiciendis provident veritatis sit? Quod, aliquam? Minima iste recusandae vero quos sunt esse distinctio nam",
      price: "4500",
      currency: "naira",
    },
    {
      title: "4 Bedroom Duplex",
      images: [
        {
          src: "/images/property_images/property.png",
          caption: "",
          featured_image: true,
        },
        {
          src: "/images/property_images/property.png",
          caption: "",
          featured_image: false,
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, eaque asperiores. Eius molestias quam odio reiciendis provident veritatis sit? Quod, aliquam? Minima iste recusandae vero quos sunt esse distinctio nam",
      price: "4500",
      currency: "naira",
    },
    {
      title: "4 Bedroom Duplex",
      images: [
        {
          src: "/images/property_images/property.png",
          caption: "",
          featured_image: true,
        },
        {
          src: "/images/property_images/property.png",
          caption: "",
          featured_image: false,
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, eaque asperiores. Eius molestias quam odio reiciendis provident veritatis sit? Quod, aliquam? Minima iste recusandae vero quos sunt esse distinctio nam",
      price: "4500",
      currency: "naira",
    },
    {
      title: "4 Bedroom Duplex",
      images: [
        {
          src: "/images/property_images/property.png",
          caption: "",
          featured_image: true,
        },
        {
          src: "/images/property_images/property.png",
          caption: "",
          featured_image: false,
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, eaque asperiores. Eius molestias quam odio reiciendis provident veritatis sit? Quod, aliquam? Minima iste recusandae vero quos sunt esse distinctio nam",
      price: "4500",
      currency: "naira",
    },
  ];

  useEffect(() => {
    dispatch(updateActivePage("buy_property"));
  }, []);
  return { properties, currentPage, setCurrentPage };
}

export default useBuyProperty;
