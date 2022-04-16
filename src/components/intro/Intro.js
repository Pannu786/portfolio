import './intro.css';
const Intro = () => {
  return (
    <div className='i'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-intro'>Hello, My name is</h2>
          <h1 className='i-name'>Pannu</h1>
          <div className='i-title'>
            <div className='i-title-wrapper'>
              <div className='i-title-item'>Web Developer👨‍💻</div>
              <div className='i-title-item'>UI/UX designer💻</div>
              <div className='i-title-item'>Chess Player♟</div>
            </div>
          </div>
          <div className='i-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatum inventore fugiat quia beatae consequatur, maxime modi cupiditate iusto vitae, quasi deleniti odit sint qui vero excepturi delectus animi dicta.</div>
        </div>
      </div>
      <div className='i-right'>right</div>
    </div>
  );
};

export default Intro;
