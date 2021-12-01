import { Stack } from '@chakra-ui/react';
import React, { VFC } from 'react';
import { Hero, HeroImage, HeroPanel } from '../components/sections/hero';
import { Layout } from '../views';

const HeroIntro = () => {
    return (
        <Hero>
            <HeroPanel spacing="6">
                <Stack></Stack>
            </HeroPanel>

            <HeroImage src="https://via.placeholder.com/700" />
        </Hero>
    );
};

const Projects: VFC = () => {
    return (
        <Layout>
            <HeroIntro />
        </Layout>
    );
};

export default Projects;
