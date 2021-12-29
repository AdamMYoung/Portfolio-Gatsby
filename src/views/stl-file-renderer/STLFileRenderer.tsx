import React, { Suspense, useEffect, useState, VFC } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Stage, OrbitControls } from '@react-three/drei';

import { BufferGeometry } from 'three';

import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { Box, BoxProps, useTheme } from '@chakra-ui/react';

type STLFileRendererProps = BoxProps & {
    file: string;
};

export const STLFileRenderer: VFC<STLFileRendererProps> = ({ file, ...rest }) => {
    return (
        <Box h="full" cursor="pointer" {...rest}>
            <Canvas>
                <OrbitControls autoRotate zoomSpeed={0.6} />
                <Suspense fallback={null}>
                    <Model file={file} />
                </Suspense>
            </Canvas>
        </Box>
    );
};

const Model: VFC<STLFileRendererProps> = ({ file }) => {
    const [geometry, setGeometry] = useState<BufferGeometry>();

    useEffect(() => {
        const stlLoader = new STLLoader();
        stlLoader.load(file, (geo) => {
            setGeometry(geo);
        });
    }, []);

    return (
        <Suspense fallback={null}>
            <Stage intensity={0.7}>
                <mesh geometry={geometry} rotation={[-Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color="#C53030" />
                </mesh>
            </Stage>
        </Suspense>
    );
};
