import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

useGLTF.preload("/models/shaurma.glb");
function App() {
	const { scene } = useGLTF("../../public/3dmodels/untitled.glb");

	return (
		<>
			<Canvas camera={{ position: [3, 3, 3] }}>
				<color attach="background" args={["#1a1717"]} />
				<OrbitControls
					target={[1, 1, 0]}
					enablePan={true}
					enableZoom={true}
					enableRotate={true}
				/>

				<Suspense fallback={null}>
					<primitive
						object={scene}
						position={[1, 1, 0]}
						scale={[0.5, 0.5, 0.5]}
					/>
				</Suspense>
				<ambientLight intensity={0.7} />
				<pointLight position={[10, 10, 10]} intensity={1} />
			</Canvas>
		</>
	);
}

export default App;
