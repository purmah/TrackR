import styled from 'styled-components';

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 0.75rem;
  .btn-container {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
    box-shadow: var(--shadow-1);
    border: 1px solid var(--grey-200);
  }
  .page-btn {
    background: transparent;
    border-color: transparent;
    width: 40px;
    height: 40px;
    font-weight: 500;
    font-size: 0.9375rem;
    color: var(--grey-700);
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
  }
  .page-btn:hover {
    background: var(--grey-100);
    color: var(--grey-900);
  }
  .active {
    background: var(--primary-500);
    color: var(--white);
  }
  .active:hover {
    background: var(--primary-600);
    color: var(--white);
  }
  .prev-btn, .next-btn {
    background: var(--background-secondary-color);
    border: 1px solid var(--grey-200);
    border-radius: var(--border-radius);
    width: 80px;
    height: 40px;
    color: var(--grey-700);
    text-transform: none;
    letter-spacing: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
    font-weight: 500;
    box-shadow: var(--shadow-1);
    font-size: 0.9375rem;
  }
  .prev-btn:hover, .next-btn:hover {
    background: var(--primary-500);
    color: var(--white);
    transform: translateY(-1px);
    border-color: var(--primary-500);
  }
  .dots {
    display: grid;
    place-items: center;
    cursor: text;
  }
`;
export default Wrapper;