import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_q6wlbvt',
        'template_igx24ss',
        formRef.current,
        '6Rsm5nq7xInnSi8Du'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='c'>
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'>Let's discuss my projects</h1>
          <div className='c-info'>
            <div className='c-info-item'>
              <img src={Phone} alt='' className='c-icon' />
              +91 9876 543 210
            </div>
            <div className='c-info-item'>
              <img src={Email} alt='' className='c-icon' />
              thepannu786@gmail.com
            </div>
            <div className='c-info-item'>
              <img src={Address} alt='' className='c-icon' />
              Walls st, Wellington, NZ
            </div>
          </div>
        </div>
        <div className='c-right'>
          <p className='c-desc'>
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && '#59b256',
              }}
              type='text'
              placeholder='Name'
              name='user_name'
            />
            <input
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && '#59b256',
              }}
              type='text'
              placeholder='Subjects'
              name='user_subject'
            />
            <input
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && '#59b256',
              }}
              type='text'
              placeholder='Email'
              name='user_email'
            />
            <textarea
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && '#59b256',
              }}
              rows='5'
              placeholder='Message'
              name='message'
            />
            <button type='submit'>Submit</button>
            {done && 'Thank you for contacting me 😀'}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
