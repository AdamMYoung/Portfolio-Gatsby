import {
    Heading,
    Tab,
    TabList,
    TabListProps,
    TabPanel,
    TabPanelProps,
    TabPanels,
    TabPanelsProps,
    TabProps,
    Tabs,
    TabsProps,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { useMergedStyles } from '../../../hooks';

export const VerticalTabs: FC<TabsProps> = ({ children, ...rest }) => {
    return (
        <Tabs
            orientation="vertical"
            variant="unstyled"
            display="grid"
            gridTemplateColumns={['1fr', null, '1fr 1fr']}
            minH="50vh"
            {...rest}
        >
            {children}
        </Tabs>
    );
};

export const VerticalTabList: FC<TabListProps> = ({ children, sx, ...rest }) => {
    const _sx = useMergedStyles(sx, {
        '* + *': {
            mt: [0, null, 8],
        },
    });

    return (
        <TabList
            sx={_sx}
            flexDirection={['row', null, 'column']}
            flexWrap={['wrap', null, 'nowrap']}
            alignItems={['initial', null, 'flex-start']}
            justifyContent={['center', null, 'flex-start']}
            alignSelf="center"
            {...rest}
        >
            {children}
        </TabList>
    );
};

export const VerticalTab: FC<TabProps> = ({ children, ...rest }) => {
    return (
        <Tab
            as={Heading}
            fontSize={['lg', null, '4xl']}
            _selected={{ color: 'red.400' }}
            cursor="pointer"
            whiteSpace="nowrap"
            {...rest}
        >
            {children}
        </Tab>
    );
};

export const VerticalTabPanels: FC<TabPanelsProps> = ({ children, ...rest }) => {
    return (
        <TabPanels mt={[8, null, '0']} {...rest}>
            {children}
        </TabPanels>
    );
};

export const VerticalTabPanel: FC<TabPanelProps> = ({ children, ...rest }) => {
    return (
        <TabPanel fontSize="3xl" {...rest}>
            {children}
        </TabPanel>
    );
};
