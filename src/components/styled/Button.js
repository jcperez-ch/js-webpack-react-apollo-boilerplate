import styled from 'react-emotion';
import { theme } from '@/themes';

const Btn = styled.button`
  background-color: ${theme.btnBackgroundColor};
  border: none;
  border-radius: 2px;
  color: ${theme.btnColor};
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;

  &:disabled {
    cursor: not-allowed;
    opacity:0.5;
  }

  &:enabled:focus,
  &:enabled:hover {
    outline: none;
  }

  &:hover {
    opacity: 0.75
  }

  ~ * {
    margin-left: 0.25rem;
  }
`;

Btn.displayName = 'Btn';

export default Btn;
