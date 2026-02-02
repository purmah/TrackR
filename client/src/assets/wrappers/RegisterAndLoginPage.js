import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  background: linear-gradient(135deg, var(--primary-50) 0%, var(--accent-50) 100%);
  
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .form {
    max-width: 450px;
    box-shadow: var(--shadow-3);
    border: 1px solid var(--grey-200);
    border-radius: var(--border-radius);
    padding: 2.5rem;
  }
  h4 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--grey-900);
    font-weight: 600;
    font-size: 1.5rem;
    letter-spacing: -0.01em;
  }
  p {
    margin-top: 1.5rem;
    text-align: center;
    line-height: 1.6;
    font-weight: 400;
    font-size: 0.9375rem;
  }
  .btn {
    margin-top: 1.25rem;
    height: 40px;
    font-size: 0.9375rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: 0;
    margin-left: 0.5rem;
    font-weight: 500;
  }
  .member-btn:hover {
    color: var(--primary-700);
    text-decoration: underline;
  }
`;
export default Wrapper;