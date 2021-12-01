import { Stack } from '@chakra-ui/react';
import React, { VFC } from 'react';
import { Hero, HeroImage, HeroPanel, HeroSubtitle, HeroTitle } from '../components/sections/hero';
import { Layout } from '../views';

const HeroIntro = () => {
    return (
        <Hero>
            <HeroPanel>
                <HeroTitle>Current and past projects.</HeroTitle>
                <HeroSubtitle>Libraries, applications, and proof of concepts.</HeroSubtitle>
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
