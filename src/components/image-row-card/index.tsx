import React from 'react';

type Props = {
    className?: string;
    title?: string;
    imgSet?: ImageEntry[];
};

type ImageEntry = {
    src: string;
    alt: string;
};

const ImageRowCard: React.FC<Props> = (props) => {
    const { title, imgSet, className, children } = props;

    return (
        <section className={` w-full ${className}`}>
            {title && <h2 className="text-2xl font-bold">{title}</h2>}
            {imgSet && (
                <div className="flex flex-wrap mt-2">
                    {imgSet.map((img) => (
                        <img className="rounded h-12 ml-1" src={img.src} alt={img.alt} />
                    ))}
                </div>
            )}
            <div className="w-full xl:w-2/3 mt-4">{children}</div>
        </section>
    );
};

export default ImageRowCard;
