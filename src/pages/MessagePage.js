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

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    setSuccessMessage(false);

    try {
      const response = await fetch("http://localhost:3000/messages_data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message }),
      });

      if (!response.ok) {
        throw new Error("request failed with status" + response.status);
      }

      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 2000);
    } catch (error) {
      setError(true);
    }

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
