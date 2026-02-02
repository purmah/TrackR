import styled from 'styled-components';

const Wrapper = styled.article`
  padding: 2rem;
  background: var(--background-secondary-color);
  border-bottom: 3px solid ${(props) => props.color};
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-2);
  border: 1px solid var(--grey-100);
  transition: var(--transition);

  &:hover {
    box-shadow: var(--shadow-3);
    transform: translateY(-2px);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 600;
    font-size: 2.5rem;
    color: ${(props) => props.color};
    line-height: 1.2;
    letter-spacing: -0.02em;
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: 0;
    text-align: left;
    margin-top: 0.75rem;
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--grey-600);
  }
  .icon {
    width: 56px;
    height: 56px;
    background: ${(props) => props.bcg};
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-1);
    svg {
      font-size: 1.75rem;
      color: ${(props) => props.color};
    }
  }
`;

export default Wrapper;