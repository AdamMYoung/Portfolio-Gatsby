import { SearchIcon } from '@chakra-ui/icons';
import {
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    ModalProps,
    HStack,
    Divider,
    ListItem,
    List,
    Stack,
    Box,
} from '@chakra-ui/react';
import React from 'react';
import { LinkButton } from '~components/link-button';

import { useInputState } from '~hooks';
import { useBlogPostSearch } from '~hooks/search';

export const BlogSearchModal = ({ onClose, ...rest }: Omit<ModalProps, 'children'>): React.ReactElement => {
    const [search, setSearch] = useInputState('');
    const results = useBlogPostSearch(search);

    return (
        <Modal onClose={onClose} {...rest}>
            <ModalOverlay />
            <ModalContent rounded="xl">
                <ModalBody>
                    <HStack spacing="4">
                        <SearchIcon />
                        <Input
                            py="2"
                            variant="unstyled"
                            autoFocus
                            placeholder="Search for a blog"
                            value={search}
                            onChange={setSearch}
                        />
                    </HStack>
                </ModalBody>
                {results.length > 0 && (
                    <>
                        <Divider />
                        <Stack p="4" maxHeight="400" overflow="none" overflowY="auto">
                            {results.map((res) => (
                                <LinkButton
                                    variant="ghost"
                                    justifyContent="left"
                                    whiteSpace="normal"
                                    key={res.slug}
                                    href={`/blog/${res.slug}`}
                                >
                                    {res.title}
                                </LinkButton>
                            ))}
                            {results.map((res) => (
                                <LinkButton
                                    variant="ghost"
                                    justifyContent="left"
                                    whiteSpace="normal"
                                    key={res.slug}
                                    href={`/blog/${res.slug}`}
                                >
                                    {res.title}
                                </LinkButton>
                            ))}
                            {results.map((res) => (
                                <LinkButton
                                    variant="ghost"
                                    justifyContent="left"
                                    whiteSpace="normal"
                                    key={res.slug}
                                    href={`/blog/${res.slug}`}
                                >
                                    {res.title}
                                </LinkButton>
                            ))}
                        </Stack>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};
