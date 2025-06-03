import React, { useRef, useState } from "react";
import "driver.js/dist/driver.css";

export default function Contact() {
  const [input, setInput] = useState({ email: "", message: "" });
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [message, setMessage] = useState({ email: "", mes: "" });

  const inpValOnChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleValidation = (e) => {
    let isValid = true;

    if (!input.email) {
      emailRef.current.style.border = ".2rem solid red";
      setMessage((prev) => ({ ...prev, email: "Input field must not be empty" }));
      isValid = false;
    } else if (!input.email.includes("@")) {
      emailRef.current.style.border = ".2rem solid red";
      setMessage((prev) => ({ ...prev, email: "Please enter a valid email address" }));
      isValid = false;
    } else {
      emailRef.current.style.border = "1.5px solid #445";
      setMessage((prev) => ({ ...prev, email: "" }));
    }

    if (!input.message) {
      messageRef.current.style.border = ".2rem solid red";
      setMessage((prev) => ({ ...prev, mes: "Input field must not be empty" }));
      isValid = false;
    } else {
      messageRef.current.style.border = "1.5px solid #445";
      setMessage((prev) => ({ ...prev, mes: "" }));
    }

    if (!isValid) e.preventDefault(); // block form submission
  };

  return (
    <section className="mainMailSection" id="contactsec">
      <div className="mailSection" id="mailId">
        <div className="cardMail">
          <div className="mailImage">
            <img src="/mail.gif" alt="message" width={300} height={50} />
          </div>
          <div className="mailContent">
            <h2>
              Do you have any{" "}
              <span style={{ color: "var(--btn-text-color)" }}>message</span>{" "}
              for me?
            </h2>
            <h4>
              Send me your message by entering your valid email address. Thank
              you for visiting this website.
            </h4>
            <form
              action="https://formsubmit.co/shiridharkhatri2@gmail.com"
              method="POST"
              onSubmit={handleValidation}
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://www.shiridhar.com.np/" />
              <input
                ref={emailRef}
                onChange={inpValOnChange}
                value={input.email}
                type="email"
                name="email"
                placeholder="example@gmail.com"
              />
              <h5 style={{ color: "#ff0000" }}>{message.email}</h5>

              <textarea
                ref={messageRef}
                onChange={inpValOnChange}
                value={input.message}
                name="message"
                placeholder="Type your message here..."
              />
              <h5 style={{ color: "#ff0000" }}>{message.mes}</h5>

              <p>
                Note: Kindly refrain from using any inappropriate language. Only
                reach out through messaging if you have specific questions or
                require assistance. Thank you.
              </p>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
