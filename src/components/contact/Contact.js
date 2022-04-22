import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';

const Contact = () => {
  return (
    <div className='c'>
      <div className='c-bg'>
        <div className='c-wrapper'>
          <div className='c-left'>
            <h1 className='c-title'>Let's discuss my projects</h1>
            <div className='c-info'>
              <div className='c-info-item'>
                <img src={Phone} alt='' className='c-icon' />
                +91 9876 543 210
              </div>
            </div>
          </div>
          <div className='c-right'></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
