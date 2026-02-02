import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: var(--shadow-1);
    .sidebar-container {
      background: var(--background-secondary-color);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
      border-right: 1px solid var(--grey-200);
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2rem;
      border-bottom: 1px solid var(--grey-200);
    }
    .nav-links {
      padding-top: 1.5rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--text-secondary-color);
      padding: 0.75rem 2rem;
      text-transform: none;
      transition: var(--transition);
      font-size: 0.9375rem;
      font-weight: 400;
    }
    .nav-link:hover {
      color: var(--primary-500);
      background: var(--primary-50);
    }
    .icon {
      font-size: 1.25rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: var(--primary-500);
      background: var(--primary-50);
      font-weight: 500;
    }
    .pending {
      background: var(--background-color);
    }
  }
`;
export default Wrapper;