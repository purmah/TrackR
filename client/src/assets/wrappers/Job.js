import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  border: 1px solid transparent;
  transition: var(--transition);
  overflow: hidden;
  
  &:hover {
    box-shadow: var(--shadow-3);
    transform: translateY(-2px);
    border-color: var(--grey-200);
  }
  
  header {
    padding: 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    background: var(--grey-50);
  }
  .main-icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, var(--primary-500) 0%, var(--primary-600) 100%);
    border-radius: var(--border-radius);
    font-size: 1.25rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 1.25rem;
    box-shadow: var(--shadow-2);
  }
  .info {
    h5 {
      margin-bottom: 0.375rem;
      color: var(--grey-900);
      font-size: 1.125rem;
      font-weight: 600;
      letter-spacing: -0.01em;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--text-secondary-color);
      font-weight: 400;
      font-size: 0.9375rem;
    }
  }
  .content {
    padding: 1.5rem;
  }
  .content-center {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    align-items: center;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
      column-gap: 1.5rem;
    }
  }
  .status {
    border-radius: 0.25rem;
    text-transform: capitalize;
    text-align: center;
    width: auto;
    display: inline-block;
    padding: 0.25rem 0.625rem;
    font-weight: 500;
    font-size: 0.8125rem;
  }
  .actions {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .edit-btn,
  .delete-btn {
    height: 36px;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    font-weight: 500;
    border-radius: var(--border-radius);
    transition: var(--transition);
  }
  .edit-btn {
    background: var(--primary-500);
    color: var(--white);
    box-shadow: var(--shadow-1);
  }
  .edit-btn:hover {
    background: var(--primary-600);
    transform: translateY(-1px);
    box-shadow: var(--shadow-2);
  }
  .delete-btn:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-2);
  }
`;

export default Wrapper;