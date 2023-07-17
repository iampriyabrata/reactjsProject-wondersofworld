import React from "react";
import Navigation from "../components/navigation";
import { useState } from "react";

const ContactPage = () => {
  const [userData, setUserData] = useState([]);

  function handleSubmit(e) {
    let dataFormat = {
      name: e.target[0].value,
      phone: e.target[1].value,
      email: e.target[2].value,
      message: e.target[3].value,
    };
    e.preventDefault();
    setUserData((oldData) => {
      return [...oldData, dataFormat];
    });

    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[3].value = "";
  }

  function deleteCard(e) {
    e.target.parentElement.parentElement.remove();
  }

  return (
    <>
      <Navigation />
      <div className="contactPageOuter">
        <div id="formContainer">
          {userData.map((details, i) => {
            return (
              <div className="card " key={i}>
                <div className="card-body d-flex flex-column">
                  <p className="card-text fw-bold">
                    name : <span id="cardusername">{details.name}</span>
                  </p>
                  <p className="card-text fw-bold">
                    phone number :{" "}
                    <span id="carduserphone">{details.phone}</span>
                  </p>
                  <p className="card-text fw-bold">
                    e-mail - : <span id="carduseremail">{details.email}</span>
                  </p>
                  <p className="card-text fw-bold">
                    message/query :{" "}
                    <span id="cardusermessage">{details.message}</span>
                  </p>
                  <button
                    className="bg-danger text-light rounded"
                    onClick={deleteCard}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div id="formSetup">
          <h2 className="text-center fw-bolder border bg-secondary">
            contact.
          </h2>
          <form onSubmit={handleSubmit} id="ContactForm">
            <div className="mb-3">
              <label htmlFor="nameform" className="form-label">
                enter your name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="@name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="numberform" className="form-label">
                phone no.
              </label>
              <input type="number" className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="formemail" className="form-label">
                email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formmessage" className="form-label">
                enter message/query
              </label>
              <textarea className="form-control" rows="3" required></textarea>
            </div>
            <div className="buttonsofform d-grid">
              <button type="submit" className="btn btn-primary rounded">
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
