import styled from 'styled-components';

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-1);
  background: var(--background-secondary-color);
  border-bottom: 1px solid var(--grey-200);
  
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: var(--transition);
  }
  .toggle-btn:hover {
    color: var(--primary-700);
  }
  .logo-text {
    display: none;
    color: var(--grey-900);
    font-weight: 600;
    font-size: 1.125rem;
    letter-spacing: -0.01em;
  }
  .logo {
    display: flex;
    align-items: center;
    width: 120px;
  }
  .btn-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    z-index: 10;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
export default Wrapper;