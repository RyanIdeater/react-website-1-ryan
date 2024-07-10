import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join our Live Streaming newslatter to receive our best quality show</p>
        <p className="footer-subscription-text">You can unsubscribe at any time</p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="Your Email" className="footer-input" />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link tp="/" className="social-logo">
              SportTv <i className="fas fa-futbol" />
            </Link>
          </div>
          <small className="website-rights">Made it by Ryan idea from Brian</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook" to="/" target="-blank" aria-label="facebook">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link className="social-icon-link instagram" to="/" target="-blank" aria-label="instagram">
              <i className="fab fa-instagram" />
            </Link>
            <Link className="social-icon-link linkedin" to="/" target="-blank" aria-label="linkedin">
              <i className="fab fa-linkedin" />
            </Link>
            <Link className="social-icon-link youtube" to="/" target="-blank" aria-label="youtube">
              <i className="fab fa-youtube" />
            </Link>
            <Link className="social-icon-link twitter" to="/" target="-blank" aria-label="twitter">
              <i className="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
