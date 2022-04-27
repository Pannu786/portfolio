import './about.css';
import me2 from '../../img/me.png';
import fcc from '../../img/fcc.png';

const About = () => {
  return (
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img src={me2} alt='' className='a-img' />
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>
          Self-taught web developer with a passion for creating beautiful and
          awesome web applications.
        </p>
        <p className='a-desc'>
          I've learned everything about web programming online there is still so
          much to learn and I am always keen to learn new stuff. Currently, I am
          looking for an opportunity where I can get to work in a group with
          senior developers and improve my skills.
        </p>
        <div className='a-award'>
          <img src={fcc} alt='' className='a-award-img' />
          <div className='a-award-texts'>
            <h4 className='a-award-title'>FreeCodeCamp</h4>
            <p className='a-award-desc'>
              FreeCodeCamp is the place where its all started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
