"use client";
import React from "react";
import { CustomButton, CustomInput, CustomTextarea } from "@/app/components";
import useContactRetailor from "./useContactRetailor";
import { AtSign, Contact2, Mail } from "lucide-react";

const ContactRetailor = () => {
  const {
    formData,
    validateDetails,
    loading,
    feedbackMessage,
    handleSendMessage,
    setFormData,
  } = useContactRetailor();
  return (
    <form
      onSubmit={handleSendMessage}
      className="w-full  p-4 bg-foreground rounded shadow-md"
    >
      <div className="text-red-500 text-sm mb-3">{feedbackMessage}</div>
      <div className="mb-4">
        <CustomInput
          error={validateDetails.name}
          icon={<Contact2 />}
          label="Name*"
          placeholder="Full name"
          inputType="text"
          labelColor="text-secondary"
          bgColor="bg-foreground"
          textColor="text-secondary"
          borderColor="border-secondary"
          value={formData.name}
          handleChange={(value: string) =>
            setFormData({ ...formData, name: value })
          }
        />
      </div>
      <div className="mb-4">
        <CustomInput
          error={validateDetails.email}
          icon={<AtSign />}
          label="Email*"
          placeholder="youremail@domain.com"
          inputType="email"
          labelColor="text-secondary"
          bgColor="bg-foreground"
          textColor="text-secondary"
          borderColor="border-secondary"
          value={formData.email}
          handleChange={(value: string) =>
            setFormData({ ...formData, email: value })
          }
        />
      </div>
      <div className="mb-6">
        <div>
          <CustomInput
            error={validateDetails.subject}
            icon={<Mail />}
            label="Subject*"
            inputType="text"
            labelColor="text-secondary"
            bgColor="bg-foreground"
            textColor="text-secondary"
            borderColor="border-secondary"
            value={formData.subject}
            handleChange={(value: string) =>
              setFormData({ ...formData, subject: value })
            }
          />
        </div>
        <div>
          <CustomTextarea
            error={validateDetails.message}
            label="Message*"
            labelColor="text-secondary"
            bgColor="bg-foreground"
            textColor="text-secondary"
            borderColor="border-secondary"
            value={formData.message}
            handleChange={(value: string) =>
              setFormData({ ...formData, message: value })
            }
          />
        </div>
      </div>
      <div className="mt-2 inline-block">
        <CustomButton
          type="submit"
          label={" Send Message"}
          showLoading={loading}
          handleClick={() => {}}
        />
      </div>
    </form>
  );
};

export default ContactRetailor;
