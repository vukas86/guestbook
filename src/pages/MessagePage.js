import { useState, useEffect } from "react";

function MessagePage(props) {
  useEffect(() => {
    document.title = "Leave us a message";
  }, []);

  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [error, setError] = useState(false);
  // const [subMsg, setSubMsg] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, msg }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);

      setError(true);
    }

    setIsSubmitting(false);

    setMsg("");
    setName("");

    setTimeout(() => {
      setIsSubmitting(true);
    }, 2000);
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
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
          required
        />
      </div>
      <div>
        <button type="submit" disabled={!isSubmitting}>
          Post
        </button>
        {!isSubmitting && <p className="status">sending...</p>}
        {error && isSubmitting && <p className="status">Failed!</p>}
      </div>
    </form>
  );
}

export default MessagePage;
