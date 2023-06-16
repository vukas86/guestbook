import { useState, useEffect } from "react";

function MessagePage(props) {
  useEffect(() => {
    document.title = "Leave us a message";
  }, []);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  // function postMessage(message) {
  //   fetch("http://localhost:3000/messages_data", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(message),
  //   });
  // }

  const submitHandler = async (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/messages_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, message }),
    });

    // try {
    //   const response = await fetch("http://localhost:3000/messages_data", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(message),
    //   });

    //   if (response.ok) {
    //     console.log("Message sent succesfully!");
    //     setSuccessMessage(true);
    //   } else {
    //     console.log("Failed to send message");
    //     setError(true);
    //   }
    // } catch (err) {
    //   console.error(err);
    //   setError(true);
    // }
    console.log({ name, message });

    setIsSubmitting(false);

    setMessage("");
    setName("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        ></input>
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          rows={4}
          cols={48}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
        />
      </div>
      <div>
        <button type="submit" disabled={isSubmitting}>
          Post
        </button>
        {isSubmitting && <p className="status">Sending...</p>}
        {error && <p className="status">Failed!</p>}
        {successMessage && !error && <p className="status">Success!</p>}
      </div>
    </form>
  );
}

export default MessagePage;
