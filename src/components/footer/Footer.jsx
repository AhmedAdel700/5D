import FacebookIcon from "./icons/FaceBookIcon";
import "./footer.css";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import TwitterIcon from "./icons/TwitterIcon";
import Dots1 from "./dots/Dots1";
import Dots2 from "./dots/Dots2";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="icons">
          <InstagramIcon />
          <FacebookIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </div>
        <p style={{ color: "#5F6073" }}>Hassan Abu Ali © 2022</p>

        <Dots1 className="footer-dots1" />
        <Dots2 className="footer-dots2" />
      </div>
    </>
  );
}
