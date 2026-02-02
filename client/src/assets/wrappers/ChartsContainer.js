import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 3rem;
  text-align: center;
  padding: 2rem;
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-2);
  border: 1px solid var(--grey-100);
  
  button {
    background: var(--white);
    border: 1px solid var(--primary-500);
    text-transform: none;
    color: var(--primary-500);
    font-size: 0.9375rem;
    cursor: pointer;
    padding: 0.625rem 1.5rem;
    border-radius: var(--border-radius);
    transition: var(--transition);
    font-weight: 500;
    letter-spacing: 0;
  }
  button:hover {
    background: var(--primary-500);
    color: var(--white);
    transform: translateY(-1px);
    box-shadow: var(--shadow-1);
  }
  h4 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: var(--grey-900);
    font-weight: 600;
    font-size: 1.25rem;
    letter-spacing: -0.01em;
  }
`;

export default Wrapper;