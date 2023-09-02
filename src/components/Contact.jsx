import React from "react";
import { IoMdCall } from "react-icons/io";
import {
  BsFillChatDotsFill,
  BsChatSquareFill,
  BsFillCameraVideoFill,
} from "react-icons/bs";

const Contact = () => {
  return (
    <div className="con-wrapper">
      <div className="paddings innerWidth flexCenter con-container">
        <div className="flexColStart con-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you. We
            believe a good balance to live can make your life better
          </span>
          <div className="flexColStart conCards">
            <div className="flexStart row">
              <ContactCard icon={<IoMdCall size={25} />} text={"Call"} />
              <ContactCard
                icon={<BsFillChatDotsFill size={25} />}
                text={"Chat"}
              />
            </div>
            <div className="flexStart row">
              <ContactCard
                icon={<BsFillCameraVideoFill size={25} />}
                text={"Video Call"}
              />
              <ContactCard
                icon={<BsChatSquareFill size={25} />}
                text={"Message"}
              />
            </div>
          </div>
        </div>
        <div className="flexEnd con-right">
          <div className="image-container">
            <img src="/contact.jpg" alt="contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

export const ContactCard = ({ icon, text }) => {
  return (
    <div className="flexColCenter con-card">
      <div className="flexStart">
        <div className="flexCenter icon">{icon}</div>
        <div className="flexColStart">
          <span className="primaryText">{text}</span>
          <span className="secondaryText">021 123 145 14</span>
        </div>
      </div>
      <button className="btn">{text} Now</button>
    </div>
  );
};
