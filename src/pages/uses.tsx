import * as React from 'react';

import List from '../components/list';
import image from '../images/Remote working challenges.svg';
import InfoPage from '../views/info-page';

// markup
const Index = () => {
    return (
        <InfoPage
            title="Uses"
            description="Software and hardware that I use day-to-day."
            src={image}
            alt="Illustration of man working on a laptop in a tent"
        >
            <h1 className="text-5xl font-bold mb-4">Uses</h1>
            <p className="text-lg font-semibold">
                Here I've listed the hardware and software I use on a day-to-day basis.
            </p>

            <div className="mt-24">
                <section>
                    <h2 className="text-4xl font-bold mb-4">Hardware</h2>
                    <List className="list-inside list-disc">
                        <List.Item>CPU - Intel i5-3570k</List.Item>
                        <List.Item>Motherboard - ASRock Z170M</List.Item>
                        <List.Item>RAM - 16GB HyperX Fury</List.Item>
                        <List.Item>GPU - Nvidia RTX 2060</List.Item>
                        <List.Item>PSU - Corsair HX1000i</List.Item>
                    </List>
                </section>

                <section>
                    <h2 className="text-4xl font-bold mt-8 mb-4">Software</h2>
                    <List className="list-inside list-disc">
                        <List.Item>Browser - Google Chrome</List.Item>
                        <List.Item>IDE (Front-end) - Visual Studio Code</List.Item>
                        <List.Item>IDE (Back-end) - Visual Studio</List.Item>
                        <List.Item>Git Client - GitKraken</List.Item>
                        <List.Item>API Testing - Postman</List.Item>
                        <List.Item>Design Tools - Zeplin</List.Item>
                    </List>
                </section>
            </div>
        </InfoPage>
    );
};

export default Index;
