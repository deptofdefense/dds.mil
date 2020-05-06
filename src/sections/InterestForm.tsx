import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { navigate } from "gatsby-link";
import { SectionBase } from "types";
import { TextInput, RadioButtonGroup, CtaButton } from "components";
import { FaCheck, FaPlus, FaSpinner } from "react-icons/fa";

export interface InterestFormData extends SectionBase {
  type: "interestForm";
}

const encode = (data: Record<string, any>) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === "object") {
      formData.append(key, value, value.name ?? "");
    } else {
      formData.append(key, value);
    }
  });

  return formData;
};

interface FormState {
  name: string;
  expertise: string;
  resume: null | File;
  linkedIn: string;
  website: string;
}

export const InterestForm: React.FC<InterestFormData> = () => {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [otherExpertise, setOtherExpertise] = useState("");
  const [formData, setFormData] = useState<FormState>({
    name: "",
    expertise: "",
    resume: null,
    linkedIn: "",
    website: "",
  });

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.persist();
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const onAttatchment: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.persist();
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: file,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.persist();
    e.preventDefault();
    setSubmitting(true);
    setErrors({});
    if (!formData.resume) {
      setErrors((errors) => ({ ...errors, resume: "Resume is required" }));
      return;
    }
    try {
      fetch("/join-us", {
        method: "POST",
        body: encode({
          "form-name": "application",
          ...formData,
          expertise:
            formData.expertise === "other"
              ? otherExpertise
              : formData.expertise,
        }),
      });
      setSubmitting(false);
      navigate("/join-us/success");
    } catch (e) {
      setErrors({
        global: e.message,
      });
    }
    setSubmitting(false);
  };

  const onOtherExpertiseChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    e.persist();
    setOtherExpertise(e.target.value);
  };

  return (
    <div className="dds-interest-form-section ">
      <form
        name="application"
        method="POST"
        action="/join-us/success/"
        onSubmit={onSubmit}
        className="dds-interest-form"
        data-netlify="true"
        netlify-honeypot="importantfield"
      >
        <input type="hidden" name="form-name" value="application" />
        <div className="display-none">
          <label>
            Don’t fill this out if you're human: <input name="importantfield" />
          </label>
        </div>
        <h3>Interested in joining DDS? Apply now.</h3>
        <TextInput
          required
          label="First & Last Name:"
          id="name"
          name="name"
          onChange={onChange}
          value={formData.name}
        />
        <fieldset className="usa-fieldset">
          <legend className="usa-sr-only">Area of expertise:</legend>
          <div className="dds-radio-buttons-wrapper">
            <div className="dds-label-wrapper">
              <legend>Area of expertise:</legend>
            </div>
            <div className="dds-radio-button-section">
              <label htmlFor="expertise" className="display-none">
                Area of expertise:
              </label>
              <RadioButtonGroup
                name="expertise"
                onChange={onChange}
                value={formData.expertise}
                required
                options={[
                  { value: "engineering", label: "Engineering" },
                  {
                    value: "productManagement",
                    label: "Product Management and something long",
                  },
                  { value: "designer", label: "UX/Visual Designer" },
                  { value: "dataScience", label: "Data Science" },
                ]}
              />
            </div>
            <div className="dds-radio-button-section">
              <RadioButtonGroup
                name="expertise"
                onChange={onChange}
                value={formData.expertise}
                required
                onOtherChange={onOtherExpertiseChange}
                otherValue={otherExpertise}
                options={[
                  { value: "operations", label: "Operations" },
                  { value: "administrative", label: "Administrative" },
                ]}
              />
            </div>
          </div>
        </fieldset>
        <div className="dds-resume-upload">
          <div className="dds-label-wrapper">
            <label htmlFor="resume">Resume:</label>
          </div>
          <label
            className={clsx("dds-resume-label", {
              "dds-resume-selected": Boolean(formData.resume?.name),
            })}
            htmlFor="resume"
          >
            {formData.resume?.name ? (
              <>
                <FaCheck className="margin-right-2" />{" "}
                {formData.resume.name.slice(0, 45)}
              </>
            ) : (
              <>
                <FaPlus className="margin-right-2" /> Upload Resume
              </>
            )}
            <input
              onChange={onAttatchment}
              id="resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
            />
          </label>
          {errors.resume && (
            <div className="text-red margin-left-2">{errors.resume}</div>
          )}
        </div>
        <TextInput
          label="LinkedIn Profile:"
          labelSecondary="(optional)"
          name="linkedIn"
          id="linkedIn"
          onChange={onChange}
          value={formData.linkedIn}
        />
        <TextInput
          label="Personal website:"
          labelSecondary="(optional)"
          name="website"
          id="website"
          onChange={onChange}
          value={formData.website}
        />
        <div className="dds-interest-form-submit-wrapper">
          <CtaButton type="submit" className={clsx({ submitting })}>
            Send Application
          </CtaButton>
        </div>
      </form>
    </div>
  );
};
