import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

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
            <input type='text' placeholder='Name' name='user_name' />
            <input type='text' placeholder='Subjects' name='user_subject' />
            <input type='text' placeholder='Email' name='user_email' />
            <textarea rows='5' placeholder='' />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
