import React from 'react';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';

import { Experience } from '../../../types';

const Description = styled.p`
  font-weight: light;
  font-size: 1.5rem;

  > a {
    font-size: 1.75rem;
    cursor: pointer;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.color.primary};

    &:focus {
      color: ${(props) => props.theme.color.primary};
    }

    &:hover {
      color: ${(props) => props.theme.color.primary};
      text-decoration: none;
    }
  }
`;

type Props = {
  experiences: Experience[];
};

export const ExperienceSet = (props: Props) => {
  const { experiences } = props;

  return (
    <Table responsive>
      <tbody>
        {experiences.map((experience) => (
          <tr>
            <td>
              <Description>{experience.date}</Description>
            </td>
            <td>
              <Description>
                {experience.jobTitle} at <b>{experience.company}</b>
              </Description>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
