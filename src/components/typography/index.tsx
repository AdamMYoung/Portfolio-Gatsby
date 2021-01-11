import styled from 'styled-components';
import tw from 'twin.macro';

const RichTextLayout = styled.div`
    h1,
    h2 {
        ${tw`text-2xl font-semibold`}
        margin-top: 1rem;
        margin-bottom: 0.75rem;
    }

    h3,
    h4,
    h5 {
        ${tw`text-xl font-semibold`}
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
    }

    hr {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
`;

export default RichTextLayout;
