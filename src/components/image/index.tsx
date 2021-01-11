import React, { useState } from 'react';

type Props = React.ComponentPropsWithoutRef<'img'>;

const Image = (props: Props) => {
    const { onLoad, className, ...rest } = props;
    const [isLoaded, setLoaded] = useState<boolean>(false);

    return (
        <img
            onLoad={() => setLoaded(true)}
            className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition ${className}`}
            {...rest}
        />
    );
};

export default Image;
