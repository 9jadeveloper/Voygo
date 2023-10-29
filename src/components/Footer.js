import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the Adventure newsletter to receive our best vacation deals
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe at any time.
            </p>
            <div className='input-areas'>
                <form>
                    <input
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    className='footer-input'
                     />
                    <Button buttonStyle='btn--outline'>Subscribe!</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/sign-up'>Testimonials</Link>
                    <Link to='/sign-up'>Careers</Link>
                    <Link to='/sign-up'>Investors</Link>
                    <Link to='/sign-up'>Terms of Service</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/sign-up'>Contact</Link>
                    <Link to='/sign-up'>Support</Link>
                    <Link to='/sign-up'>Destinations</Link>
                    <Link to='/sign-up'>Sponsorships</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/sign-up'>Submit Videos</Link>
                    <Link to='/sign-up'>Ambassadors</Link>
                    <Link to='/sign-up'>Agency</Link>
                    <Link to='/sign-up'>Influencers</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/sign-up'>Instagram</Link>
                    <Link to='/sign-up'>Facebook</Link>
                    <Link to='/sign-up'>Youtube</Link>
                    <Link to='/sign-up'>Twitter</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        HAVN <i className='fab fa-typo3' />
                    </Link>
                </div>
                <small className='website-rights'> HAVN @ 2022</small>
                <div className='social-icons'>
                    <Link
                    className='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                        <i className='fab fa-facebook-f' />
                    </Link>
                    <Link
                    className='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                        <i className='fab fa-instagram' />
                    </Link>
                    <Link
                    className='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                    >
                        <i className='fab fa-youtube' />
                    </Link>
                    <Link
                    className='social-icon-link Twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                    >
                        <i className='fab fa-twitter' />
                    </Link>
                    <Link
                    className='social-icon-link Linkedin'
                    to='/'
                    target='_blank'
                    aria-label='Linkedin'
                    >
                        <i className='fab fa-linkedin' />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Footer