import { Cloud } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function CloudBackground() {
  return (
    <Canvas className="absolute top-0 left-0 w-full h-full z-0">
      <ambientLight intensity={0.5} />
      <Cloud position={[0, 5, -10]} opacity={0.3} speed={0.4} />
    </Canvas>
  );
}
export default CloudBackground;
