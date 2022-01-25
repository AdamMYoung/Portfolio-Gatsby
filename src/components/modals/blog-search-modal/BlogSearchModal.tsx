import { SearchIcon } from '@chakra-ui/icons';
import {
    Divider,
    Flex,
    HStack,
    Input,
    LinkBox,
    LinkOverlay,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    ModalProps,
    Stack,
    Tag,
    Text,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import { LinkButton } from '~components/link-button';
import { useInputState } from '~hooks/use-input-state';
import { useBlogPostSearch } from '~hooks/use-blog-post-search';

dayjs.extend(relativeTime);

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
                        <Stack p="4" spacing="4" maxHeight="400" overflow="none" overflowY="auto" divider={<Divider />}>
                            {results.map(({ title, slug, topics, createdAt }) => (
                                <LinkBox key={slug} as={Stack} spacing="2">
                                    <LinkOverlay
                                        px="0"
                                        variant="link"
                                        justifyContent="left"
                                        whiteSpace="normal"
                                        as={LinkButton}
                                        href={`/blog/${slug}`}
                                        w="full"
                                    >
                                        {title}
                                    </LinkOverlay>
                                    <Flex wrap="wrap" gap="2">
                                        {topics.map((t) => (
                                            <Tag key={t} size="sm">
                                                {t}
                                            </Tag>
                                        ))}
                                    </Flex>
                                    <Text variant="subtitle">{dayjs().to(new Date(createdAt))}</Text>
                                </LinkBox>
                            ))}
                        </Stack>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};
