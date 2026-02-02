import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, var(--primary-50) 0%, var(--accent-50) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  .page {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .info {
    max-width: 720px;
    text-align: center;
    margin: 0 auto;
  }
  
  .logo-container {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  }
  
  h1 {
    font-weight: 600;
    font-size: clamp(2.25rem, 5vw, 3.5rem);
    letter-spacing: -0.02em;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    span {
      color: var(--primary-600);
      background: linear-gradient(135deg, var(--primary-500) 0%, var(--primary-700) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      display: inline-block;
    }
  }
  
  p {
    line-height: 1.7;
    color: var(--grey-700);
    margin-bottom: 2.5rem;
    font-size: 1.0625rem;
    font-weight: 400;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .btn-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .btn {
    padding: 0.75rem 1.75rem;
    font-size: 0.9375rem;
    border-radius: var(--border-radius);
    font-weight: 500;
    transition: var(--transition);
    box-shadow: var(--shadow-2);
  }
  
  .register-link {
    background: linear-gradient(135deg, var(--primary-500) 0%, var(--primary-700) 100%);
    color: var(--white);
    box-shadow: 0 2px 8px rgba(91, 127, 199, 0.25);
  }
  
  .register-link:hover {
    background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(91, 127, 199, 0.3);
  }
  
  .login-btn {
    background: var(--white);
    color: var(--primary-600);
    border: 1px solid var(--grey-300);
  }
  
  .login-btn:hover {
    transform: translateY(-1px);
    background: var(--grey-50);
    border-color: var(--primary-500);
  }
  
  @media (max-width: 768px) {
    .btn-group {
      flex-direction: column;
      align-items: stretch;
    }
    
    .btn {
      width: 100%;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;
export default Wrapper;