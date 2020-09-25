import { Card as BSCard } from 'react-bootstrap';
import mobile from 'is-mobile';
import styled from 'styled-components';

export const Card = styled(BSCard)`
  height: ${mobile() ? 'auto' : '100%'};
  width: 100%;
  padding: 12px;
  border-radius: 16px;
`;
