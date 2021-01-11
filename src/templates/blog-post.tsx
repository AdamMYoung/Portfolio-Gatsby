import ReactDOMServer from 'react-dom/server';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { graphql, Link, navigate } from 'gatsby';
import dayjs from 'dayjs';
import React from 'react';
import GatsbyImage from 'gatsby-image';
import { BLOCKS } from '@contentful/rich-text-types';
import { Disqus } from 'gatsby-plugin-disqus';
import readingTime from 'reading-time';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import List from '../components/list';
import Typography from '../components/typography';

type Props = {
    data: any;
};

const BlogPost = ({ data }: Props) => {
    const { title, publishDate, summary, content, headerImage, slug: postSlug } = data.contentfulBlogPost;
    const { edges: posts } = data.allContentfulBlogPost;

    const disqusConfig = {
        url: `${data.site.siteMetadata.siteUrl}/blog/${postSlug}`,
        identifier: postSlug,
        title,
    };

    const renderers = {
        code: ({ language, value }) => {
            return <SyntaxHighlighter style={tomorrow} children={value} language={language} />;
        },
    };

    const contentfulRenderOptions = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const embeddedElement = node.data.target;

                switch (embeddedElement.internal.type) {
                    case 'ContentfulAsset':
                        return (
                            <div className="mx-auto my-2">
                                <GatsbyImage
                                    imgStyle={{ objectFit: 'contain' }}
                                    style={{ maxHeight: '50vh' }}
                                    fluid={embeddedElement.fluid}
                                />
                            </div>
                        );
                }
            },
            [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                const embeddedElement = node.data.target;

                switch (embeddedElement.internal.type) {
                    case 'ContentfulCodeBlock':
                        return <ReactMarkdown children={embeddedElement.code.code} renderers={renderers} />;
                    default:
                        return null;
                }
            },
        },
    };

    const blogContent = renderRichText(content, contentfulRenderOptions);
    const stats = readingTime(ReactDOMServer.renderToStaticMarkup(blogContent as any));

    return (
        <Layout title={title}>
            <Helmet encodeSpecialCharacters={false}>
                <meta name="description" content={summary?.summary} />

                <meta property="og:type" content="article" />
                <meta property="og:article:published_time" content={new Date(publishDate).toISOString()} />
                <meta property="og:article:author:profile:first_name" content="Adam" />
                <meta property="og:article:author:profile:last_name" content="Young" />
                <meta property="og:description" content={summary?.summary} />

                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        datePublished: new Date(publishDate).toISOString(),
                        headline: title,
                        author: {
                            '@type': 'Person',
                            name: 'Adam Young',
                        },
                    })}
                </script>
            </Helmet>

            <div className="container lg:flex my-4" style={{ minHeight: '30vh' }}>
                <div className="w-full lg:w-2/3 px-2">
                    <h2 className="text-4xl font-bold">{title}</h2>
                    <p className="my-0 text-md mt-2">{dayjs(publishDate).format('dddd DD MMMM YYYY')}</p>
                    <p className="text-md">{stats.text}</p>
                    <hr className="my-4" />
                    <Typography>{blogContent}</Typography>
                </div>
                <div className="w-full lg:w-1/3 px-2">
                    {posts.length > 0 && (
                        <div className="mt-4 border rounded-lg p-4">
                            <p className="my-2 ml-1 text-3xl font-bold">Other posts</p>
                            <List active>
                                {posts.map(({ node: post }) => (
                                    <List.Item onClick={() => navigate(`/blog${post.slug}`)}>{post.title}</List.Item>
                                ))}
                            </List>
                        </div>
                    )}
                </div>
            </div>

            <Disqus config={disqusConfig} />
        </Layout>
    );
};

export default BlogPost;

export const query = graphql`
    query blogPostQuery($title: String!, $date: Date!) {
        site {
            siteMetadata {
                siteUrl
            }
        }
        contentfulBlogPost(title: { eq: $title }) {
            title
            publishDate
            slug
            summary {
                summary
            }
            content {
                raw
                references {
                    ... on ContentfulCodeBlock {
                        contentful_id
                        code {
                            code
                        }
                        internal {
                            type
                        }
                    }
                    ... on ContentfulAsset {
                        contentful_id
                        fluid {
                            ...GatsbyContentfulFluid_withWebp
                        }
                        internal {
                            type
                        }
                    }
                }
            }
        }
        allContentfulBlogPost(
            limit: 5
            filter: { title: { ne: $title }, publishDate: { lt: $date } }
            sort: { fields: publishDate, order: DESC }
        ) {
            edges {
                node {
                    title
                    slug
                    publishDate
                }
            }
        }
    }
`;
