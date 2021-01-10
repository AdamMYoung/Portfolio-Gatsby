import React from 'react';
import Link from '../../link';

const FooterColumn: React.FC<{ title: string }> = (props) => {
    return (
        <div className="w-1/2 md:w-1/4 lg:w-1/6 p-2">
            <p className="font-bold px-1">{props.title}</p>
            {props.children}
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="container flex flex-wrap text-sm p-4 text-center sm:text-left">
            <FooterColumn title={`© ${new Date().getFullYear()}`}>
                <p>Adam Young</p>
            </FooterColumn>
            <FooterColumn title="Built with">
                <Link type="external" to="https://www.gatsbyjs.com/">
                    Gatsby
                </Link>
            </FooterColumn>
            <FooterColumn title="Deployed on">
                <Link type="external" to="https://www.netlify.com/">
                    Netlify
                </Link>
            </FooterColumn>
            <FooterColumn title="Site navigation">
                <Link to="/work">Work</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/blog">Blog</Link>
            </FooterColumn>
            <FooterColumn title="Misc pages">
                <Link to="/uses">Uses</Link>
                <Link to="/photography">Photography</Link>
            </FooterColumn>
            <FooterColumn title="Socials">
                <Link type="external" to="mailto:adam@aydev.uk">
                    Email me
                </Link>
                <Link type="external" to="https://github.com/AdamMYoung">
                    GitHub
                </Link>
                <Link type="external" to="https://twitter.com/AdamMYoung_">
                    Twitter
                </Link>
            </FooterColumn>
        </footer>
    );
};

export default Footer;
