import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { MathUtils, ShaderMaterial } from "three";
import { vertexShader } from "./vertexShader";
import { fragmentShader } from "./fragmentShader";

export const Blob = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<THREE.Mesh>(null);
  
  const hover = useRef<boolean>(false);

  const uniforms = useMemo(() => ({
    u_intensity: { value: 0.3 },
    u_time: { value: 0.0 },
  }), []);

  useFrame((state) => {
    const { clock } = state;

    if(mesh.current) {
      (mesh.current.material as THREE.ShaderMaterial).uniforms.u_time.value = 0.4 * clock.getElapsedTime();
  
      (mesh.current.material as THREE.ShaderMaterial).uniforms.u_intensity.value = MathUtils.lerp(
        (mesh.current.material as THREE.ShaderMaterial).uniforms.u_intensity.value,
        hover.current ? 0.85 : 0.15,
        0.02
      );
    }
  });
      
  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      scale={1.5}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe
      />
    </mesh>
  );
};
