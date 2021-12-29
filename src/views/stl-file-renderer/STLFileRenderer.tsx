import React, { Suspense, useEffect, useRef, useState, VFC } from 'react';
import { Canvas, MeshProps } from '@react-three/fiber';
import { Center, Bounds, OrbitControls, PerspectiveCamera, useBounds } from '@react-three/drei';

import { BufferGeometry } from 'three';

import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { Box, BoxProps } from '@chakra-ui/react';

type STLFileRendererProps = BoxProps & {
    file: string;
};

type ModelProps = STLFileRendererProps &
    MeshProps & {
        onLoad: () => void;
    };

export const STLFileRenderer: VFC<STLFileRendererProps> = ({ file, ...rest }) => {
    const controlsRef = useRef();
    const cameraRef = useRef();

    const handleLoad = () => {
        cameraRef.current.position.set(0, 0.7, 1);
    };

    return (
        <Box h="full" cursor="pointer" {...rest}>
            <Canvas>
                <PerspectiveCamera ref={cameraRef} makeDefault />
                <OrbitControls ref={controlsRef} makeDefault autoRotate zoomSpeed={0.6} position={[0, 100, 0]} />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />

                <Suspense fallback={null}>
                    <Bounds fit damping={2} margin={1}>
                        <Model file={file} onLoad={handleLoad} />
                    </Bounds>
                </Suspense>
            </Canvas>
        </Box>
    );
};

const Model: VFC<ModelProps> = ({ file, onLoad, ...rest }) => {
    const [geometry, setGeometry] = useState<BufferGeometry>();
    const bounds = useBounds();

    useEffect(() => {
        const stlLoader = new STLLoader();
        stlLoader.load(file, (geo) => {
            setGeometry(geo);
        });
    }, []);

    useEffect(() => {
        bounds.refresh().clip().fit();
        onLoad();
    }, [geometry, bounds]);

    return (
        <Center>
            <mesh geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} {...rest}>
                <meshStandardMaterial color="#C53030" />
            </mesh>
        </Center>
    );
};
