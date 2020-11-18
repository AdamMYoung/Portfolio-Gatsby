import React from 'react';
import { Button, Form, Table, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { TileList } from '../tile-list/TileList';
import GatsbyImage from 'gatsby-image';
import { Link } from 'gatsby';

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const AlbumThumbnail = styled(GatsbyImage)`
  transition: filter 0.3s;
  margin-left: auto;
  margin-right: auto;

  filter: brightness(70%);

  ${ImageContainer}:hover & {
    filter: brightness(48%) blur(1px);
  }
`;

const AlbumText = styled.p`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0%;
  font-size: 2rem;
  transform: translate(0%, -50%);
  -webkit-transform: translate(0%, -50%);
  text-align: center;
  user-select: none;
  color: white;
`;

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

const SocialLink = styled.a`
  color: gray;
  margin-right: 1rem;
  cursor: pointer;

  &:focus {
    color: gray;
  }

  &:hover {
    color: gray;
    text-decoration: none;
  }
`;

const ProjectCard = styled(Card)`
  border: none;
  margin-top: 1rem;
`;

type Props = {
  data: any;
};

export const ContentResolver = (props: Props) => {
  const { data } = props;

  switch (data.internal.type) {
    case 'ContentfulText':
      return <RichText data={data} />;

    case 'ContentfulSkillSet':
      return <SkillSet data={data} />;

    case 'ContentfulProject':
      return <Project data={data} />;

    case 'ContentfulExperienceSet':
      return <ExperienceSet data={data} />;

    case 'ContentfulContact':
      return <ContactForm />;

    case 'ContentfulAlbum':
      return <Album data={data} />;
  }

  return null;
};

const RichText = (props: Props) => {
  const { data } = props;
  return (
    <>
      <Description>{documentToReactComponents(JSON.parse(data.content.raw))}</Description>
      <div className='d-flex mt-4'>
        {data.links.map((link) => (
          <SocialLink href={link.url} target='_blank' rel='noopener'>
            {link.name}
          </SocialLink>
        ))}
      </div>
    </>
  );
};

const SkillSet = (props: Props) => {
  const { data } = props;
  return (
    <>
      <TileList
        entries={data.skills.map((skill) => ({
          filterKey: skill.category,
          text: skill.description.description,
          iconName: skill.devIconCssName,
        }))}
      />
    </>
  );
};

const Project = (props: Props) => {
  const { data } = props;
  return (
    <Col sm={12} md={6}>
      <ProjectCard>
        <GatsbyImage fluid={data.image.fluid} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{documentToReactComponents(JSON.parse(data.description.raw))}</Card.Text>

          <div className='d-flex flex-column'>
            {data.links.map((link) => (
              <Button className='my-1' href={link.url} target='_blank' rel='noopener'>
                {link.name}
              </Button>
            ))}
          </div>
        </Card.Body>
      </ProjectCard>
      <hr className='d-md-none mb-4' />
    </Col>
  );
};

const ExperienceSet = (props: Props) => {
  const { data } = props;

  return (
    <Table responsive>
      <tbody>
        {data.experienceHistory.map((experience) => (
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

const ContactForm = () => {
  return (
    <Col>
      <Form name='contact' method='post'>
        <input type='hidden' name='form-name' value='contact' />
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='John Doe' name='name' />
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' placeholder='john.doe@contact.co.uk' name='email' />
        </Form.Group>

        <Form.Group controlId='message'>
          <Form.Label>Message</Form.Label>
          <Form.Control as='textarea' type='text' name='message' placeholder='Hi, I was wondering...' />
        </Form.Group>

        <Button type='submit'>Send</Button>
      </Form>
    </Col>
  );
};

const Album = (props: Props) => {
  const { data } = props;

  return (
    <Col key={data.name} sm={12} md={6} lg={4}>
      <Link to={`/albums/${encodeURI(data.name.toLowerCase())}`}>
        <ImageContainer>
          <AlbumThumbnail fixed={[data.featuredImage.fixed]} alt={data.name} />
          <AlbumText>{data.name}</AlbumText>
        </ImageContainer>
      </Link>
    </Col>
  );
};
