import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 2rem 2rem 3rem;
  box-shadow: var(--shadow-2);
  border: 1px solid var(--grey-100);
  
  .form-title {
    margin-bottom: 2rem;
    color: var(--grey-900);
    font-weight: 600;
    font-size: 1.5rem;
    letter-spacing: -0.01em;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1.25rem;
  }
  .form-btn {
    align-self: end;
    margin-top: 1.5rem;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, var(--primary-500) 0%, var(--primary-600) 100%);
    height: 40px;
    font-size: 0.9375rem;
    font-weight: 500;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-1);
  }
  .form-btn:hover {
    background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-700) 100%);
    transform: translateY(-1px);
    box-shadow: var(--shadow-2);
  }
  .delete-btn {
    background: var(--red-light);
    color: var(--red-dark);
    border: 1px solid var(--red-dark);
    font-weight: 500;
  }
  .delete-btn:hover {
    background: var(--red-dark);
    color: var(--white);
    transform: translateY(-1px);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1.5rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;