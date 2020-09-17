import React from 'react';

type Props = {
    temperature: number;
    measurement: string;
};

const WeatherIndicator: React.FC<Props> = props => {
    return <p>{`${props.temperature} ${props.measurement}`}</p>;
};

export default WeatherIndicator;
