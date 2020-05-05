import React, { useState } from "react";
import clsx from "clsx";
import { SectionBase } from "types";
import { TextInput, RadioButtonGroup, CtaButton } from "components";
import { FaCheck, FaPlus } from "react-icons/fa";

export interface InterestFormData extends SectionBase {
  type: "interestForm";
}

export const InterestForm: React.FC<InterestFormData> = () => {
  const [resumeSelected, setResumeSelected] = useState("");
  const [resumeError, setResumeError] = useState(false);

  const onResumeUpload: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const paths = e.currentTarget.value.split("\\");
    const fileName = paths[paths.length - 1];
    let trimmed = fileName.slice(0, 30);
    if (trimmed.length < fileName.length) {
      trimmed = `${trimmed}...`;
    }
    setResumeSelected(trimmed);
  };

  const onSubmit: React.FormEventHandler = (e) => {
    console.log(resumeSelected);
    if (resumeSelected === "") {
      e.preventDefault();
      setResumeError(true);
    }
  };

  return (
    <div className="dds-interest-form-section ">
      <form
        name="application"
        method="POST"
        action="/join-us/success/"
        onSubmit={onSubmit}
        className="dds-interest-form"
        data-netlify-recaptcha="true"
        data-netlify="true"
      >
        <h3>Interested in joining DDS? Apply now.</h3>
        <TextInput required label="First & Last Name:" id="name" name="name" />
        <div className="dds-radio-buttons-wrapper">
          <div className="dds-label-wrapper">
            <label>Area of expertise:</label>
          </div>
          <RadioButtonGroup
            name="expertise"
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
          <RadioButtonGroup
            name="expertise"
            required
            includeOther
            options={[
              { value: "operations", label: "Operations" },
              { value: "administrative", label: "Administrative" },
            ]}
          />
        </div>
        <div className="dds-resume-upload">
          <div className="dds-label-wrapper">
            <label htmlFor="resume">Resume:</label>
          </div>
          <label
            className={clsx("dds-resume-label", {
              "dds-resume-selected": Boolean(resumeSelected),
            })}
            htmlFor="resume"
          >
            {resumeSelected ? (
              <>
                <FaCheck className="margin-right-2" /> {resumeSelected}
              </>
            ) : (
              <>
                <FaPlus className="margin-right-2" /> Upload Resume
              </>
            )}
            <input
              onChange={onResumeUpload}
              id="resume"
              name="resume"
              type="file"
            />
          </label>
          {resumeError && (
            <div className="text-red margin-left-2">Resume is required.</div>
          )}
        </div>
        <TextInput
          label="LinkedIn Profile:"
          labelSecondary="(optional)"
          name="linkedIn"
          id="linkedIn"
        />
        <TextInput
          label="Personal website:"
          labelSecondary="(optional)"
          name="website"
          id="website"
        />
        <div data-netlify-recaptcha="true"></div>
        <div className="dds-interest-form-submit-wrapper">
          <CtaButton type="submit">Send Application</CtaButton>
        </div>
      </form>
    </div>
  );
};
