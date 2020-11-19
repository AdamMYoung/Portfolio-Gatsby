import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { TileList } from '../tile-list/TileList';

import { Album } from '../album/Album';
import { ContactForm } from '../contact-form/ContactForm';
import { ExperienceSet } from '../experience-set/ExperienceSet';
import { Project } from '../project/Project';
import { LinkText } from '../link-text/LinkText';
import {
  ContentfulAlbum,
  ContentfulExperienceSet,
  ContentfulProject,
  ContentfulSectionContentTypes,
  ContentfulSkillSet,
  ContentfulText,
} from '../../../types';

type Props = {
  data: ContentfulSectionContentTypes;
};

export const ContentResolver = (props: Props) => {
  const { data: contentfulData } = props;

  let data = contentfulData;

  switch (data.internal.type) {
    case 'ContentfulText':
      data = data as ContentfulText;
      return <LinkText links={data.links}>{documentToReactComponents(JSON.parse(data.content.raw))}</LinkText>;

    case 'ContentfulSkillSet':
      data = data as ContentfulSkillSet;
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
      data = data as ContentfulProject;
      return (
        <Project name={data.name} image={data.image.fluid} links={data.links}>
          {documentToReactComponents(JSON.parse(data.description.raw))}
        </Project>
      );

    case 'ContentfulExperienceSet':
      data = data as ContentfulExperienceSet;
      return <ExperienceSet experiences={data.experienceHistory} />;

    case 'ContentfulContact':
      return <ContactForm />;

    case 'ContentfulAlbum':
      data = data as ContentfulAlbum;
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
