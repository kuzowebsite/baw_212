import { Suspense } from 'react';
import { PerspectiveCamera, OrbitControls, View, useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import Lights from './Lights';
import Loader from './Loader';

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {

  const { scene } = useGLTF('/models/scene.glb');

  return (
     <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      <ambientLight intensity={0.3} />
     <PerspectiveCamera makeDefault position={[0, 0, 5]} />

      <Lights />

      <OrbitControls
       makeDefault
       ref={controlRef}
       enableZoom={true}
       enablePan={true}
       rotateSpeed={0.4}
       target={new THREE.Vector3(0, 0, 0)}
       onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
     />

      <group ref={groupRef} position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>

         <primitive object={scene} scale={size === 'small' ? [0.5, 0.5, 0.5] : [1, 1, 1]} />
        </Suspense>
      </group>
     </View>
  );
};

export default ModelView;
