import React, { useEffect, useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { TileEntry } from '../../types';

const ImageContainer = styled.div<{ visible?: boolean }>`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  display: flex;
  position: relative;
  margin-bottom: 24px;
  transition: opacity 0.6s;

  &:hover {
    cursor: pointer;
  }
`;

const SkillIcon = styled.i`
  font-size: 14rem;
  width: 100%;

  transition: filter 0.3s;

  @media screen and (max-width: 556px) {
    font-size: 10rem;
  }

  ${ImageContainer}:hover & {
    filter: brightness(47%) blur(4px);
  }
`;

const HoverText = styled.p`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  padding: 12px;
  transition: opacity 0.3s;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

type ListProps = {
  entries: TileEntry[];
};

type EntryProps = {
  text: string;
  iconName: string;
};

type FilterProps = {
  keys: string[];
  selectedKey: string | null;
  onKeySelected: (key: string | null) => void;
};

export const TileList = (props: ListProps) => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const { entries } = props;

  const filters = useMemo(() => {
    const set = new Set<string>();
    entries.forEach((entry) => set.add(entry.filterKey));
    return Array.from(set);
  }, [entries]);

  const entriesToDisplay = useMemo(
    () => (!selectedKey ? entries : entries.filter((entry) => entry.filterKey === selectedKey)),
    [selectedKey, entries]
  );

  return (
    <>
      <TileListFilters keys={filters} selectedKey={selectedKey} onKeySelected={setSelectedKey} />
      <div className='mt-4 d-flex flex-wrap justify-content-center'>
        {entriesToDisplay.map((entry) => (
          <TileListEntry key={entry.text} text={entry.text} iconName={entry.iconName} />
        ))}
      </div>
    </>
  );
};

const TileListFilters = (props: FilterProps) => {
  const { keys, selectedKey, onKeySelected } = props;

  return (
    <div className='d-flex'>
      <Button
        className='mr-2'
        variant='outline-primary'
        active={selectedKey === null}
        onClick={() => onKeySelected(null)}
      >
        All
      </Button>
      {keys.map((key) => (
        <Button
          key={key}
          className='mx-2'
          variant='outline-primary'
          active={selectedKey === key}
          onClick={() => onKeySelected(key)}
        >
          {key}
        </Button>
      ))}
    </div>
  );
};

const TileListEntry = (props: EntryProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const { text, iconName } = props;

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);

    return () => {
      setVisible(false);
    };
  }, []);

  return (
    <ImageContainer visible={visible} className='mx-2'>
      <SkillIcon className={iconName} />
      <HoverText>{text}</HoverText>
    </ImageContainer>
  );
};
