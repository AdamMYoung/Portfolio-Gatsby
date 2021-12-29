import React, { Suspense, useEffect, useState, VFC } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Stage, OrbitControls } from '@react-three/drei';

import { BufferGeometry } from 'three';

import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { Box, useTheme } from '@chakra-ui/react';

type STLFileRendererProps = {
    file: string;
};

export const STLFileRenderer: VFC<STLFileRendererProps> = ({ file }) => {
    return (
        <Box h="full" minH={[250, null, 400]}>
            <Canvas>
                <OrbitControls maxDistance={175} autoRotate zoomSpeed={0.6} />
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
