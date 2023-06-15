import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WelcomePage.module.css";

// welcome page task - where I added: visible title, welcome message, testemonials and button that leads to the message page. Welcome page is connected with message page using React library "React Router".

function Guestbook() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  async function getMessages() {
    try {
      const response = await fetch("http://localhost:3000/messages_data");
      if (!response.ok) {
        throw new Error("Request failed with status: " + response.status);
      }
      const data = await response.json();
      console.log(data);
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }
  useEffect(() => {
    document.title = "Guestbook";
    getMessages();
  }, []);
  console.log(messages);

  const navigatorHandler = () => {
    navigate("/messages");
  };
  return (
    <>
      <section className={styles.header}>
        <h1 className={styles.title}>GUESTBOOK</h1>
        <p>See what people wrote about us and feel free to leave a message</p>
      </section>
      <section className={styles.msgSection}>
        {messages.map((message) => {
          return (
            <ul className={styles.messages}>
              <li>
                <p>{message.message}</p>
                <br />
                <span>{message.name}</span>
              </li>
            </ul>
          );
        })}
        <button
          type="button"
          className={styles.btn1}
          onClick={navigatorHandler}
        >
          Leave a message
        </button>
      </section>
    </>
  );
}

export default Guestbook;
