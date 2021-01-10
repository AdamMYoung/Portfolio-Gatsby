import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledList = styled.ul<{ active?: boolean }>`
    li {
        ${(props) =>
            props.active &&
            tw`cursor-pointer transition hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400`}
    }
`;
