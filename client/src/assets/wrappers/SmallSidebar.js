import styled from 'styled-components';

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: var(--background-secondary-color);
    width: var(--fluid-width);
    max-width: 400px;
    height: auto;
    max-height: 90vh;
    border-radius: var(--border-radius);
    padding: 2rem;
    position: relative;
    overflow-y: auto;
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    color: var(--grey-600);
    cursor: pointer;
    transition: var(--transition);
  }
  .close-btn:hover {
    color: var(--grey-900);
  }
  header {
    margin-bottom: 2rem;
  }
  .nav-links {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--text-secondary-color);
    padding: 0.75rem 1rem;
    text-transform: none;
    transition: var(--transition);
    border-radius: var(--border-radius);
    margin-bottom: 0.25rem;
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
`;
export default Wrapper;