import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WelcomePage.module.css";

// welcome page task - where I added: visible title, welcome message, testemonials and button that leads to the message page. Welcome page is connected with message page using React library "React Router".

function Guestbook() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Guestbook";
  }, []);

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
        <ul className={styles.messages}>
          <li>
            <p>
              "" I like it, but can the snow look a little warmer make the font
              bigger. The flier should feel like a warm handshake that's great,
              but can you make it work for ie 2 please, nor doing some work for
              us "pro bono" will really add to your portfolio i promise, we need
              to make the new version clean and sexy. Can you help me out? you
              will get a lot of free exposure doing this can you make it pop
              make it look like Apple, yet i was wondering if my cat could be
              placed over the logo in the flyer try a more powerful colour can
              my website be in english?."
              <br />
              <span>Roger Moore, Cadilac Services</span>
            </p>
          </li>
          <li>
            <p>
              "We need more images of groups of people having non-specific types
              of fun there are more projects lined up charge extra the next
              time, nor can it be more retro, and can the black be darker can
              you please change the color theme of the website to pink and
              purple? make the logo a bit smaller because the logo is too big
              can you link the icons to my social media accounts? oh and please
              put pictures of cats everywhere, but could you move it a tad to
              the left. That's great, but we need to add this 2000 line essay
              can we have another option, for try a more powerful colour."{" "}
              <br />
              <span>Helen Hunt, Break Int.</span>
            </p>
          </li>
          <li>
            <p>
              "I like it, but can the snow look a little warmer make the font
              bigger. The flier should feel like a warm handshake that's great,
              but can you make it work for ie 2 please, nor doing some work for
              us "pro bono" will really add to your portfolio i promise, we need
              to make the new version clean and sexy. Can you help me out? you
              will get a lot of free exposure doing this can you make it pop
              make it look like Apple, yet i was wondering if my cat could be
              placed over the logo in the flyer try a more powerful colour can
              my website be in english?." <br />
              <span>Roger Moore, Cadilac Services</span>
            </p>
          </li>
          <li>
            <p>
              "We need more images of groups of people having non-specific types
              of fun there are more projects lined up charge extra the next
              time, nor can it be more retro, and can the black be darker can
              you please change the color theme of the website to pink and
              purple? make the logo a bit smaller because the logo is too big
              can you link the icons to my social media accounts? oh and please
              put pictures of cats everywhere, but could you move it a tad to
              the left. That's great, but we need to add this 2000 line essay
              can we have another option, for try a more powerful colour."{" "}
              <br />
              <span>Helen Hunt, Break Int.</span>
            </p>
          </li>
          <li>
            <p>
              "I like it, but can the snow look a little warmer make the font
              bigger. The flier should feel like a warm handshake that's great,
              but can you make it work for ie 2 please, nor doing some work for
              us "pro bono" will really add to your portfolio i promise, we need
              to make the new version clean and sexy. Can you help me out? you
              will get a lot of free exposure doing this can you make it pop
              make it look like Apple, yet i was wondering if my cat could be
              placed over the logo in the flyer try a more powerful colour can
              my website be in english?." <br />
              <span>Roger Moore, Cadilac Services</span>
            </p>
          </li>
          <li>
            <p>
              "We need more images of groups of people having non-specific types
              of fun there are more projects lined up charge extra the next
              time, nor can it be more retro, and can the black be darker can
              you please change the color theme of the website to pink and
              purple? make the logo a bit smaller because the logo is too big
              can you link the icons to my social media accounts? oh and please
              put pictures of cats everywhere, but could you move it a tad to
              the left. That's great, but we need to add this 2000 line essay
              can we have another option, for try a more powerful colour."{" "}
              <br />
              <span>Helen Hunt, Break Int.</span>
            </p>
          </li>
          <li>
            <p>
              "We need more images of groups of people having non-specific types
              of fun there are more projects lined up charge extra the next
              time, nor can it be more retro, and can the black be darker can
              you please change the color theme of the website to pink and
              purple? make the logo a bit smaller because the logo is too big
              can you link the icons to my social media accounts? oh and please
              put pictures of cats everywhere, but could you move it a tad to
              the left. That's great, but we need to add this 2000 line essay
              can we have another option, for try a more powerful colour."{" "}
              <br />
              <span>Helen Hunt, Break Int.</span>
            </p>
          </li>
          <li>
            <p>
              "I like it, but can the snow look a little warmer make the font
              bigger. The flier should feel like a warm handshake that's great,
              but can you make it work for ie 2 please, nor doing some work for
              us "pro bono" will really add to your portfolio i promise, we need
              to make the new version clean and sexy. Can you help me out? you
              will get a lot of free exposure doing this can you make it pop
              make it look like Apple, yet i was wondering if my cat could be
              placed over the logo in the flyer try a more powerful colour can
              my website be in english?." <br />
              <span>Roger Moore, Cadilac Services</span>
            </p>
          </li>
          <li>
            <p>
              "We need more images of groups of people having non-specific types
              of fun there are more projects lined up charge extra the next
              time, nor can it be more retro, and can the black be darker can
              you please change the color theme of the website to pink and
              purple? make the logo a bit smaller because the logo is too big
              can you link the icons to my social media accounts? oh and please
              put pictures of cats everywhere, but could you move it a tad to
              the left. That's great, but we need to add this 2000 line essay
              can we have another option, for try a more powerful colour."{" "}
              <br />
              <span>Helen Hunt, Break Int.</span>
            </p>
          </li>
          <li>
            <p>
              "I like it, but can the snow look a little warmer make the font
              bigger. The flier should feel like a warm handshake that's great,
              but can you make it work for ie 2 please, nor doing some work for
              us "pro bono" will really add to your portfolio i promise, we need
              to make the new version clean and sexy. Can you help me out? you
              will get a lot of free exposure doing this can you make it pop
              make it look like Apple, yet i was wondering if my cat could be
              placed over the logo in the flyer try a more powerful colour can
              my website be in english?." <br />
              <span>Roger Moore, Cadilac Services</span>
            </p>
          </li>
        </ul>
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
