"use client";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";

import usePersonalData from "./usePersonalData";
import { CustomButton, CustomInput, CustomSelect } from "@/app/components";
import { AtSign, CalendarDays, Contact2, Landmark, MemoryStick, Phone, Map } from "lucide-react";
const PersonalData = () => {
  const {
    handleSubmit,
    setFormData,
    maritalStatus,
    gender,
    formData,
    validateDetails,
    loading,
    feedbackMessage,
  } = usePersonalData();
  return (
    <div className="animate__animated animate__fadeIn">
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-4 flex items-center md:flex-row flex-col justify-between gap-4">
          <CustomInput
            error={validateDetails?.firstName}
            icon={<Contact2 />}
            label="First Name*"
            placeholder="First name"
            inputType="text"
            labelColor="text-primary"
            bgColor="bg-background"
            textColor="text-primary"
            borderColor="border-primary"
            value={formData.firstName}
            handleChange={(value: string) =>
              setFormData({ ...formData, firstName: value })
            }
          />
          <CustomInput
            error={validateDetails?.lastName}
            icon={<Contact2 />}
            label="Last Name*"
            placeholder="Last name"
            inputType="text"
            labelColor="text-primary"
            bgColor="bg-background"
            textColor="text-primary"
            borderColor="border-primary"
            value={formData.lastName}
            handleChange={(value: string) =>
              setFormData({ ...formData, lastName: value })
            }
          />
        </div>

        <div className="mb-4 flex items-center justify-between md:flex-row flex-col gap-4">
          <CustomInput
            error={validateDetails?.email}
            icon={<AtSign />}
            label="Email*"
            placeholder="youremail@domain.com"
            inputType="email"
            labelColor="text-primary"
            bgColor="bg-background"
            textColor="text-primary"
            borderColor="border-primary"
            value={formData.email}
            handleChange={(value: string) =>
              setFormData({ ...formData, email: value })
            }
          />
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
        </div>
        <div className="mb-4 flex items-center justify-between md:flex-row flex-col gap-4">
          <CustomSelect
            data={gender}
            value={formData.gender}
            label={"Gender*"}
            labelColor="text-primary"
            bgColor="bg-background"
            textColor="text-primary"
            borderColor="border-primary"
            defaultText={"Select Gender"}
            handleChange={() => {}}
          />

          <CustomSelect
            data={maritalStatus}
            value={formData.maritalStatus}
            label={"Marital Status*"}
            labelColor="text-primary"
            bgColor="bg-background"
            textColor="text-primary"
            borderColor="border-primary"
            defaultText={"Select Gender"}
            handleChange={() => {}}
          />
        </div>

        <div className="mb-4  flex items-center justify-between md:flex-row flex-col gap-4">
          <CustomInput
            error={validateDetails?.dateOfBirth}
            icon={<CalendarDays />}
            label="Date of Birth*"
            inputType="date"
            labelColor="text-primary"
            bgColor="bg-background"
            textColor="text-primary"
            borderColor="border-primary"
            value={formData.dateOfBirth}
            handleChange={(value: string) =>
              setFormData({ ...formData, dateOfBirth: value })
            }
          />

          <CustomInput
            error={validateDetails?.address}
            icon={<CalendarDays />}
            label="Address*"
            inputType="date"
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

        <div className="mb-4 flex items-center md:flex-row flex-col justify-between gap-4">
          <CustomInput
            error={validateDetails?.city}
            icon={<MemoryStick />}
            label="City*"
            placeholder="City"
            inputType="text"
            labelColor="text-primary"
            bgColor="bg-background"
            textColor="text-primary"
            borderColor="border-primary"
            value={formData.city}
            handleChange={(value: string) =>
              setFormData({ ...formData, city: value })
            }
          />
          <CustomInput
            error={validateDetails?.state}
            icon={<Landmark />}
            label="State*"
            placeholder="State"
            inputType="text"
            labelColor="text-primary"
            bgColor="bg-background"
            textColor="text-primary"
            borderColor="border-primary"
            value={formData.state}
            handleChange={(value: string) =>
              setFormData({ ...formData, state: value })
            }
          />

          <CustomInput
            error={validateDetails?.country}
            icon={<Map />}
            label="Country*"
            placeholder="Country"
            inputType="text"
            labelColor="text-primary"
            bgColor="bg-background"
            textColor="text-primary"
            borderColor="border-primary"
            value={formData.country}
            handleChange={(value: string) =>
              setFormData({ ...formData, country: value })
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

export default PersonalData;
