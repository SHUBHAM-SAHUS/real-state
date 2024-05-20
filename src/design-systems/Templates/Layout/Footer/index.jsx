import Image from '@/design-systems/Atoms/Image'
import style from './style.module.scss'
import footerMainLogo from '@/assets/images/footerMainLogo.png';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className={style.section_padding}> </div>
      <div className={style.footer_container}>
        <div className='container' >
        <div className={style.footer_head}>
          <div className={style.footer_upper}>
            <div className={style.footer_head_logo}>
              <Image src={footerMainLogo} alt="img" />
            </div>

            <div className={style.email_area}>
              <input type="email" placeholder="Enter your email" className={style.email_container} />
              <button className={style.subscribe_btn}>Subscribe</button>
            </div>
          </div>

          {/* Footer middle area */}
          <div className={style.footer_middle_area}>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className={style.footer_list}>
                  <h5 className={style.footer_list_heading}>Property Rental</h5>
                  <ul>
                    <li>Mobile Apps</li>
                    <li>Our Services</li>
                    <li>Price Trends</li>
                    <li>Post Your Property</li>
                    <li>Real Estate Investment</li>
                    <li>Articles</li>
                    <li>Customer Service</li>
                  </ul>
                </div>
              </div>
              {/* --------------------- */}

              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className={style.footer_list}>
                  <h5 className={style.footer_list_heading}>Upcoming Projects</h5>
                  <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Careers with us</li>
                    <li>Terms and Conditions</li>
                    <li>Request Info</li>
                    <li>Feedback</li>
                    <li>Testimonials</li>
                  </ul>
                </div>
              </div>

              {/* ----------------------------------------------- */}

              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className={style.footer_list}>
                  <h5 className={style.footer_list_heading}>Projects n High Demand</h5>
                  <ul>
                    <li>Mobile Apps</li>
                    <li>Our Services</li>
                    <li>Price Trends</li>
                    <li>Post Your Property</li>
                    <li>Real Estate Investment</li>
                    <li>Articles</li>
                    <li>Customer Service</li>
                  </ul>
                </div>
              </div>

              {/* --------------------------------- */}
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className={style.footer_list}>
                  <h5 className={style.footer_list_heading}>Contact Us</h5>
                  <ul>
                    <li>Customer Care NUmber -</li>
                    <li>8765434567</li>
                    <li>Email - xyz@indonesia@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className={style.line} />

          <div className={style.footer_end_area}>
            <h5 className={style.footer_end_heading}> Indonesia estate 2024. All Rights Reserved</h5>
            <div className={style.footer_logos}>
              <p><FaFacebook /></p>
              <p><FaXTwitter /></p>
              <p><FaInstagram /></p>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </>
  )
}

export default Footer

//       </div>
//     </>
//   )
// }

// export default Footer;
