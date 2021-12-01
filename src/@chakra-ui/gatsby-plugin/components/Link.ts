export const Link = {
    baseStyle: {
        color: 'red.400',
    },
    variants: {
        'animate-ltr': {
            color: 'inherit',
            textDecoration: 'none',
            display: 'inline-block',
            position: 'relative',
            px: 1,
            top: '0.23em',
            overflow: 'hidden',
            _hover: {
                textDecoration: 'none',
                _after: {
                    transform: 'translate3d(0, 0, 0)',
                },
            },
            _focus: {
                textDecoration: 'none',
                _after: {
                    transform: 'translate3d(0, 0, 0)',
                },
            },
            _after: {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '0.15em',
                backgroundColor: 'currentColor',
                transition: 'opacity 300ms, transform 300ms',
                opacity: 1,
                transform: 'translate3d(-101%, 0, 0)',
            },
        },
    },
};
