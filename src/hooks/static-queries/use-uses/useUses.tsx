type Use = {
    name: string;
    description: string;
    url: string;
};

const developmentUses: Use[] = [
    {
        name: 'Editor - Visual Studio Code',
        description:
            "My IDE of choice. It's quick, reliable and works across all both Windows and macOS. It's also free, so bonus.",
        url: '',
    },
    {
        name: "Laptop - Macbook Pro 16'",
        description: `A solid choice, probably the most "stereotypical" of the bunch. Running an i7 @ 2.60GHz, 16GB RAM. Excellent for battery life and performance, no noticeable slowdowns on macOS compared to Windows.`,
        url: '',
    },
    {
        name: "Monitor - LG 27' 4K UHD (27UN83A-W)",
        description:
            'I previously upgraded to this 4K monitor from a 1080p ultrawide, and the color difference alone is worth the swap. This helps especially when it comes to color accuracy of components during development.',
        url: '',
    },
    {
        name: 'Keyboard - Poker 3',
        description:
            "I've bounced between various keyboards over the years, starting with Cherry MX Blue switches, then Cherry MX Browns. I've settled on the POK3R since it's small, portable, and has Cherry MX Reds which strikes a good balance between tactility and noise for me.",
        url: '',
    },
    {
        name: 'Mouse - Logitech MX Master',
        description:
            "Quite possibly the only mouse I'll ever buy at this point. The battery lasts for a month on a since charge, I can pair it between 3 different devices and it's extremely comfy to use for extended periods.",
        url: '',
    },
    {
        name: 'Headphones - Bose QC35 II',
        description:
            "I got these initially for travelling, and they've worked perfectly in noisy environments like trains and aeroplanes. They've got excellent sound quality, and the battery lasts more than a day of heavy use in my case.",
        url: '',
    },
];

const printingUses: Use[] = [
    {
        name: 'Printer - Ender 3',
        description:
            "A great entry-level 3D printer. I've had no issues with resolution or build quality, the only annoyances are levelling the bed every time I print. An upgrade to the Ender 3 Pro includes a self-leveling bed, so I'd spring for that if you have the money.",
        url: '',
    },
];

const photographyUses: Use[] = [
    {
        name: 'Body - Nikon D3500',
        description:
            "My first DSLR. The image quality is great from what I need, and I've found no obvious limitations yet.",
        url: '',
    },
    {
        name: 'Bag - Andoer DSLR Camera Bag',
        description:
            "Holds the camera safely, with velcro inserts to support the attached lens where needed. It's got quite a few different compartments for filters, batteries and any other accessories.",
        url: '',
    },
    {
        name: 'Lens - Nikon 18-55 AF-P DX',
        description:
            'As a kit lens, this is a great choice for beginners. It has a good focal range, and quick and quiet when auto-focusing on your subject.',
        url: '',
    },
];

export const useUses = () => {
    return { development: developmentUses, printing: printingUses, photography: photographyUses };
};
