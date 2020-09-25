import React from 'react';

import { Card } from './Card';

export const DetailCard: React.FC = (props) => {
  return <Card>{props.children}</Card>;
};
