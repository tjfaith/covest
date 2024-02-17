"use client";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";

import useNextOfKin from "./useNextOfKin";
import { CustomButton, CustomInput } from "@/app/components";
import { AtSign, CalendarDays, Contact2, Landmark, MemoryStick, Phone, Map, MapPin, Contact } from "lucide-react";
const NextOfKin = () => {
  const {
    handleSubmit,
    setFormData,
    formData,
    validateDetails,
    loading,
    feedbackMessage,
  } = useNextOfKin();
  return (
    <div className="animate__animated animate__fadeIn">
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-4 flex items-center md:flex-row flex-col justify-between gap-4">
          <CustomInput
            error={validateDetails?.fullName}
            icon={<Contact2 />}
            label="First Name*"
            placeholder="Full Name"
            inputType="text"
            labelColor="text-primary"
            bgColor="bg-background"
            textColor="text-primary"
            borderColor="border-primary"
            value={formData.fullName}
            handleChange={(value: string) =>
              setFormData({ ...formData, fullName: value })
            }
          />
          <CustomInput
            error={validateDetails?.email}
            icon={<AtSign />}
            label="Email*"
            placeholder="Email"
            inputType="text"
            labelColor="text-primary"
            bgColor="bg-background"
            textColor="text-primary"
            borderColor="border-primary"
            value={formData.email}
            handleChange={(value: string) =>
              setFormData({ ...formData, email: value })
            }
          />
        </div>

        <div className="mb-4 flex items-center justify-between md:flex-row flex-col gap-4">
          <CustomInput
            error={validateDetails?.phoneNumber}
            icon={<Phone />}
            label="Phone Number*"
            placeholder="Phone Number"
            inputType="text"
            labelColor="text-primary"
            bgColor="bg-background"
            textColor="text-primary"
            borderColor="border-primary"
            value={formData.phoneNumber}
            handleChange={(value: string) =>
              setFormData({ ...formData, phoneNumber: value })
            }
          />
          <CustomInput
            error={validateDetails?.relationship}
            icon={<Contact />}
            label="Relationship*"
            placeholder="Relationship"
            inputType="text"
            labelColor="text-primary"
            bgColor="bg-background"
            textColor="text-primary"
            borderColor="border-primary"
            value={formData.relationship}
            handleChange={(value: string) =>
              setFormData({ ...formData, relationship: value })
            }
          />
        </div>


        <div className="mb-4  flex items-center justify-between md:flex-row flex-col gap-4">
          <CustomInput
            error={validateDetails?.address}
            icon={<MapPin />}
            label="Address*"
            inputType="text"
            labelColor="text-primary"
            bgColor="bg-background"
            textColor="text-primary"
            borderColor="border-primary"
            value={formData.address}
            handleChange={(value: string) =>
              setFormData({ ...formData, address: value })
            }
          />
        </div>


        <div className="mt-6 inline-block">
          <CustomButton
            bgColor="bg-gradient-to-b from-primary  to-accent-foreground"
            type="submit"
            label={"Save"}
            showLoading={loading}
            handleClick={() => {}}
          />
        </div>
      </form>
    </div>
  );
};

export default NextOfKin;
