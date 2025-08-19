import React, { useState, memo, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import ctaShawarma from "../assets/ctaShawarma.svg";
import ctaShawarma2 from "../assets/ctaShawarma2.png";

// Custom hook for form validation
const useFormValidation = () => {
  const validationRules = useMemo(
    () => ({
      name: {
        required: true,
        minLength: 2,
        maxLength: 50,
        pattern: /^[a-zA-Z\s]+$/,
        message: "Name must be 2-50 characters and contain only letters",
      },
      phone: {
        required: true,
        pattern: /^[0-9]{10}$/,
        message: "Phone number must be exactly 10 digits",
      },
      email: {
        required: true,
        pattern: /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please enter a valid email address",
      },
      location: {
        required: true,
        minLength: 2,
        maxLength: 100,
        message: "Location must be 2-100 characters",
      },
    }),
    []
  );

  const validateField = useCallback(
    (fieldName, value) => {
      const rules = validationRules[fieldName];
      if (!rules) return "";

      // Required validation
      if (rules.required && (!value || value.trim() === "")) {
        return `${
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        } is required`;
      }

      // Skip other validations if field is empty and not required
      if (!value || value.trim() === "") return "";

      // Pattern validation
      if (rules.pattern && !rules.pattern.test(value.trim())) {
        return rules.message;
      }

      // Length validations
      if (rules.minLength && value.trim().length < rules.minLength) {
        return rules.message;
      }

      if (rules.maxLength && value.trim().length > rules.maxLength) {
        return rules.message;
      }

      return "";
    },
    [validationRules]
  );

  const validateForm = useCallback(
    (formData) => {
      const errors = {};
      Object.keys(validationRules).forEach((field) => {
        const error = validateField(field, formData[field]);
        if (error) errors[field] = error;
      });
      return errors;
    },
    [validateField, validationRules]
  );

  return { validateField, validateForm };
};

// Custom hook for form state management
const useFormState = (initialState, validator) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      // Update form data
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Real-time validation for touched fields
      if (touched[name]) {
        const fieldError = validator.validateField(name, value);
        setErrors((prev) => ({
          ...prev,
          [name]: fieldError,
        }));
      }
    },
    [touched, validator]
  );

  const handleBlur = useCallback(
    (e) => {
      const { name, value } = e.target;

      // Mark field as touched
      setTouched((prev) => ({
        ...prev,
        [name]: true,
      }));

      // Validate on blur
      const fieldError = validator.validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: fieldError,
      }));
    },
    [validator]
  );

  const handleSubmit = useCallback(
    async (submitFunction) => {
      // Validate entire form
      const formErrors = validator.validateForm(formData);
      setErrors(formErrors);

      // Mark all fields as touched
      const allTouched = Object.keys(formData).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {});
      setTouched(allTouched);

      // Check if form is valid
      if (Object.keys(formErrors).length > 0) {
        return false;
      }

      // Submit form
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        await submitFunction(formData);
        setSubmitStatus("success");

        // Reset form on success
        setFormData(initialState);
        setErrors({});
        setTouched({});

        return true;
      } catch (error) {
        setSubmitStatus("error");
        console.error("Form submission error:", error);
        return false;
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validator, initialState]
  );

  const resetForm = useCallback(() => {
    setFormData(initialState);
    setErrors({});
    setTouched({});
    setSubmitStatus(null);
  }, [initialState]);

  return {
    formData,
    errors,
    touched,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  };
};

// Input sanitization functions
const sanitizeInput = {
  name: (value) => value.replace(/[^a-zA-Z\s]/g, ""),
  phone: (value) => value.replace(/[^0-9]/g, "").slice(0, 10),
  email: (value) => value.trim().toLowerCase(),
  location: (value) => value.trim(),
};

const Cta = () => {
  const initialFormState = {
    name: "",
    phone: "",
    email: "",
    location: "",
  };

  const validator = useFormValidation();
  const {
    formData,
    errors,
    touched,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormState(initialFormState, validator);

  // Email submission function
  const submitEmail = useCallback(async (data) => {
    return emailjs.send(
      "service_yhjca2g",
      "template_zx4365a",
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        location: data.location,
      },
      "4YeEjxO8U73uvXDOk"
    );
  }, []);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const success = await handleSubmit(submitEmail);

      if (success) {
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          resetForm();
        }, 5000);
      }
    },
    [handleSubmit, submitEmail, resetForm]
  );

  // Input handler with sanitization
  const handleInput = useCallback(
    (e) => {
      const { name, value } = e.target;
      const sanitizedValue = sanitizeInput[name]
        ? sanitizeInput[name](value)
        : value;

      // Update the input value immediately for better UX
      e.target.value = sanitizedValue;

      // Update form state
      handleChange({
        target: {
          name,
          value: sanitizedValue,
        },
      });
    },
    [handleChange]
  );

  // Form validation status
  const isFormValid = useMemo(() => {
    const hasNoErrors = Object.values(errors).every((error) => !error);
    const hasAllRequiredFields = Object.keys(formData).every(
      (key) => formData[key] && formData[key].trim() !== ""
    );
    return hasNoErrors && hasAllRequiredFields;
  }, [errors, formData]);

  return (
    <section className="flex flex-col" id="contactus">
      {/* Hero Section */}
      <div className="bg-[#0B0A0AC9] text-white py-10 md:py-12 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
            ARE YOU LOOKING TO TAKE A FRANCHISE?
          </h1>
          <a href="#contactus">
            <button className="bg-[#CB3A1A] hover:bg-white hover:text-[#CB3A1A] transition  px-6 py-2 rounded  ">
              JOIN WITH US →
            </button>
          </a>
        </div>

        <img
          src={ctaShawarma}
          alt="Wrap Illustration"
          loading="lazy"
          className="absolute left-4 -bottom-24 w-32 sm:w-40 md:w-48 hidden md:block"
        />
      </div>

      {/* Contact Section */}
      <div className="bg-white py-10 md:py-14 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-start text-left mb-4 sm:mb-8 w-full sm:w-[70%] mx-auto">
            <button className="bg-[#333333] text-white  text-xs sm:text-sm font-semibold px-4 py-2 rounded mb-4">
              CRISPY, EVERY BITE TASTE
            </button>
            <h2 className="text-xl sm:text-2xl md:text-4xl jost-600">
              CONTACT INFORMATION
            </h2>
          </div>

          <div className="bg-gray-200 py-6 px-6 max-w-2xl mx-auto rounded mb-8 sm:mb-12">
            <p className="font-bold text-md sm:text-xl text-center">
              JOIN WITH US IS ONE OF THE BEST DECISION IN YOUR LIFE
            </p>
          </div>

          <form
            className="max-w-md mx-auto space-y-6"
            onSubmit={onSubmit}
            noValidate
          >
            {Object.keys(initialFormState).map((field) => (
              <div key={field} className="flex flex-col text-left">
                <label
                  htmlFor={field}
                  className="text-sm jost-700 mb-1 uppercase"
                >
                  {field} <span className="text-red-500">*</span>
                </label>
                <input
                  id={field}
                  type={field === "email" ? "email" : "text"}
                  inputMode={
                    field === "phone"
                      ? "numeric"
                      : field === "email"
                      ? "email"
                      : "text"
                  }
                  name={field}
                  placeholder={`Enter your ${field}`}
                  value={formData[field]}
                  onInput={handleInput}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  autoComplete={
                    field === "name"
                      ? "name"
                      : field === "email"
                      ? "email"
                      : field === "phone"
                      ? "tel"
                      : field === "location"
                      ? "address-level2"
                      : "off"
                  }
                  aria-invalid={
                    touched[field] && errors[field] ? "true" : "false"
                  }
                  aria-describedby={
                    touched[field] && errors[field]
                      ? `${field}-error`
                      : undefined
                  }
                  className={`
                    border rounded px-4 py-2 transition-all duration-200 
                    focus:outline-none focus:ring-2 focus:ring-red-400 
                    disabled:bg-gray-100 disabled:cursor-not-allowed
                    ${
                      touched[field] && errors[field]
                        ? "border-red-500 bg-red-50"
                        : touched[field] && !errors[field]
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300 hover:border-gray-400"
                    }
                  `}
                />
                <AnimatePresence>
                  {touched[field] && errors[field] && (
                    <motion.span
                      id={`${field}-error`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-500 text-sm mt-1"
                      role="alert"
                    >
                      {errors[field]}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                font-semibold px-6 py-2 rounded transition-all duration-200 
                justify-center flex items-center mx-auto w-full sm:w-[60%] md:w-[40%]
                ${
                  isSubmitting
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                    : "bg-[#CB3A1A] text-white hover:bg-red-700 active:scale-95"
                }
              `}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  SUBMITTING...
                </>
              ) : (
                "SUBMIT"
              )}
            </button>
          </form>

          {/* Form submission status messages */}
          <AnimatePresence>
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`
                  fixed bottom-5 right-5 px-8 py-4 rounded-lg shadow-xl text-lg font-medium z-50
                  ${
                    submitStatus === "success"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }
                `}
              >
                {submitStatus === "success"
                  ? "✅ Email sent successfully! We'll get back to you soon."
                  : "❌ Failed to send email. Please try again."}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <img
          src={ctaShawarma2}
          alt="Wrap Illustration"
          loading="lazy"
          className="absolute right-8 bottom-16 w-16 sm:w-20 md:w-24 hidden md:block"
        />
      </div>
    </section>
  );
};

export default memo(Cta);
