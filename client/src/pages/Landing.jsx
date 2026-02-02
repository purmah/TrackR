import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <div className='container page'>
        <div className='info'>
          <div className='logo-container'>
            <Logo />
          </div>
          <h1>
            Job <span>Application</span> Tracker
          </h1>
          <p>
            Take control of your job search journey. TrackR helps you organize and monitor all your job applications in one place. Keep track of application statuses, interview schedules, and follow-ups with ease. Never lose track of an opportunity again.
          </p>
          <div className='btn-group'>
            <Link to='/register' className='btn register-link'>
              Get Started
            </Link>
            <Link to='/login' className='btn login-btn'>
              Login / Demo User
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;