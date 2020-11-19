import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { TileList } from '../tile-list/TileList';

import { Album } from '../album/Album';
import { ContactForm } from '../contact-form/ContactForm';
import { ExperienceSet } from '../experience-set/ExperienceSet';
import { Project } from '../project/Project';
import { LinkText } from '../link-text/LinkText';

type Props = {
  data: any;
};

export const ContentResolver = (props: Props) => {
  const { data } = props;

  switch (data.internal.type) {
    case 'ContentfulText':
      return <LinkText links={data.links}>{documentToReactComponents(JSON.parse(data.content.raw))}</LinkText>;

    case 'ContentfulSkillSet':
      return (
        <TileList
          entries={data.skills.map((skill) => ({
            filterKey: skill.category,
            text: skill.description.description,
            iconName: skill.devIconCssName,
          }))}
        />
      );

    case 'ContentfulProject':
      return (
        <Project name={data.name} image={data.image.fluid} links={data.links}>
          {documentToReactComponents(JSON.parse(data.description.raw))}
        </Project>
      );

    case 'ContentfulExperienceSet':
      return <ExperienceSet experiences={data.experienceHistory} />;

    case 'ContentfulContact':
      return <ContactForm />;

    case 'ContentfulAlbum':
      return (
        <Album
          name={data.name}
          url={`/albums/${encodeURI(data.name.toLowerCase())}`}
          thumbnail={data.featuredImage.fixed}
        />
      );
  }

  return null;
};
