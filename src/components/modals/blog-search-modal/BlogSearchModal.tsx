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
} from '@chakra-ui/react';
import React from 'react';

import { useInputState } from '~hooks';
import { useBlogPostSearch } from '~hooks/search';

export const BlogSearchModal = ({ onClose, ...rest }: Omit<ModalProps, 'children'>): React.ReactElement => {
    const [search, setSearch] = useInputState('');
    const results = useBlogPostSearch(search);

    console.log(results);

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
                        <List>
                            {results.map((res) => (
                                <ListItem key={res.slug}>{res.title}</ListItem>
                            ))}
                        </List>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};
