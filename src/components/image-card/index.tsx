import React from 'react';
import { FluidObject } from 'gatsby-image';
import Img from 'gatsby-image';

type Props = {
    className?: string;
    fluid?: FluidObject;
    src?: string;
    alt?: string;
};

const ImageCard: React.FC<Props> = (props) => {
    const { fluid, src, alt, className, children } = props;

    return (
        <section className={`flex flex-col xl:flex-row w-full ${className}`}>
            {fluid && <Img className="w-full xl:w-1/3 rounded" fluid={fluid} alt={alt} />}
            {src && <img className="rounded" src={src} alt={alt} />}
            <div className="w-full xl:w-2/3 mt-4 xl:mt-0 xl:ml-4">{children}</div>
        </section>
    );
};

export default ImageCard;
