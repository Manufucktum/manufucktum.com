import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader,useThree,useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Environment } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense,useEffect  } from "react";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const CameraController = () => {
  const { camera, gl } = useThree();
  
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 10;
      controls.minPolarAngle = 0; // radians
      controls.maxPolarAngle = Math.PI/2; // radians
      console.log('etst');
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};
const Scene = () => {
  const materials = useLoader(MTLLoader, "hand6.mtl");
  const obj = useLoader(OBJLoader, "hand6.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  let frames = 10;
  let frame = 0;
  useFrame(() => {
    if(frame === frames){
    console.log("Hey, I'm executing every frame!")
    frame = 0;

  }
  frame ++;
  obj.rotateY(0.01);
 })
  return <primitive object={obj} scale={0.6} />;
};

export default function ThreeDee() {
  return (
    <div className="threed">
      <Canvas>
        <Suspense fallback={null}>
        <ambientLight intensity={0.9} />
          <Scene />
          <CameraController />
          <Environment
            background={true} // can be true, false or "only" (which only sets the background) (default: false)
            files={['wall.jpg', 'wall.jpg', 'wall.jpg', 'wall.jpg', 'wall.jpg', 'wall.jpg']}
            path="/"
            preset={null}
            scene={undefined} // adds the ability to pass a custom THREE.Scene, can also be a ref
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
