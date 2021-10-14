import React, {useRef} from "react";
import { useForm } from "react-hook-form";
import {sendForm} from 'emailjs-com'
const Contact = () => {
  const form = useRef()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    
    sendForm('service_o6bwu7w', "template_gzvo92j", form.current, process.env.REACT_APP_EMAILJS_USERNAME ).then((result)=>{
      console.log("Message submited: " + JSON.stringify(data));
    }, (error) => {console.error("An error occured, please try again later", error.text)})
    e.target.reset();
  };

  return (
    <>
      <form className="contact_form" ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="first">
          <ul>
            <li>
              <input
                name="user_name"
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
              />
              {errors.name && errors.name.type === "required" && (
                <span>Name is required</span>
              )}
            </li>
            {/* End first name field */}

            <li>
              <input
                  name="user_email"
                {...register(
                  "email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
                type="email"
                placeholder="Email"
              />
              {errors.email && <span role="alert">{errors.email.message}</span>}
            </li>
            {/* End email name field */}

            <li>
              <textarea
                 name="message"
                {...register("subject", { required: true })}
                placeholder="Message"
                
              ></textarea>
              {errors.subject && <span>Subject is required.</span>}
            </li>
            {/* End subject  field */}
          </ul>
        </div>

        <div className="tokyo_tm_button">
          <button type="submit" className="white-fill-bg fill-black" style={{backgroundColor:"rgba(160,231,229,0.7)"}}>
            Send Message
          </button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}
    </>
  );
};

export default Contact;
