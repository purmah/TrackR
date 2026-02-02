import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: var(--white);
    color: var(--grey-900);
    border: 1px solid var(--grey-300);
    transition: var(--transition);
    font-weight: 400;
  }
  .logout-btn:hover {
    background: var(--grey-50);
    border-color: var(--grey-400);
  }
  .img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    background: var(--white);
    border: 1px solid var(--grey-200);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    border-radius: var(--border-radius);
    padding: 0.625rem;
    background: transparent;
    border-color: transparent;
    color: var(--grey-900);
    letter-spacing: 0;
    text-transform: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
    font-weight: 400;
    transition: var(--transition);
    font-size: 0.9375rem;
  }
  .dropdown-btn:hover {
    background: var(--grey-50);
  }
`;

export default Wrapper;