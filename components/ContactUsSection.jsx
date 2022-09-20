import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import ButtonComponent from "./ButtonComponent";
import FormikForm from "./FormikForm";
import FormInput from "./FormikForm/formInput";
import FormTextarea from "./FormikForm/formTextarea";

const ContactUsSection = () => {
  const submitAction = (values) => {
    console.log(values);
  };

  const socialHandles = [
    {
      socialIcon: <BsFacebook />,
      link: "https://www.facebook.com/Stable-Pay-102120599312184",
    },
    {
      socialIcon: <BsInstagram />,
      link: "https://www.instagram.com/pay_stable/",
    },
    { socialIcon: <BsTwitter />, link: "https://twitter.com/PayStable" },
  ];

  return (
    <section id="contact-us">
      <div className="flex flex-col mt-20 tab:flex-row gap-8 max-w-7xl mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-white text-3xl text-center tab:text-left font-dm_serif font-bold">
            Contact Us
          </h1>
          <div className="flex flex-col justify-center items-center tab:items-start justify-self-center mt-4 tab:mt-10 gap-4">
            <h4 className="font-bold font-dm_serif text-xl text-white">
              Follow Us
            </h4>
            <div className="text-white/60 text-2xl  flex gap-6">
              {socialHandles.map((socialHandle, i) => (
                <a
                  key={i}
                  href={socialHandle.link}
                  target="_blank"
                  className=" hover:text-white transition-all"
                  rel="noreferrer"
                >
                  {socialHandle.socialIcon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div>
            <FormikForm
              formClass="flex-col gap-4"
              initialValues={{
                firstName: "",
                email: "",
                message: "",
              }}
              onSubmit={submitAction}
              fields={[
                {
                  placeholder: "Enter your Name",
                  type: "text",
                  name: "firstName",
                  inputClass:
                    "bg-pri-light px-4 py-2 placeholder:text-gray text-white rounded-lg",
                  component: FormInput,
                },
                {
                  placeholder: "Enter a valid email address",
                  type: "email",
                  name: "email",
                  inputClass:
                    "bg-pri-light px-4 py-2 placeholder:text-gray text-white rounded-lg",
                  component: FormInput,
                },
                {
                  name: "message",
                  inputClass:
                    "bg-pri-light px-4 py-2 placeholder:text-gray text-white rounded-lg",
                  placeholder: "Enter Your Message",
                  component: FormTextarea,
                },
              ]}
              action={() => (
                <ButtonComponent
                  appearance={"pri"}
                  buttonText="Get Early Access"
                  type="submit"
                  buttonClass="self-start text-sm bg-pri-dark"
                />
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
