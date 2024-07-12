import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} Indian Institute of Technology Hyderabad, Kandi, Sangareddy, Telangana, India. All
      rights reserved..</h4>
      <div className="footerLinks">
        <a href="https://www.facebook.com/iithyderabad/" target="_blank">
          <FaFacebook />
        </a>
        <a href="https://x.com/IITHyderabad" target="_blank">
          <FaTwitter />
        </a>

        <a href="https://www.linkedin.com/school/indian-inst-of-technology-hyderabad/" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
