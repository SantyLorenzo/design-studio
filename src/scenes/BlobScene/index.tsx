import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Blob } from '../../components/Blob'
import './styles.css'

const BlobScene = () => {
    return (
        <section className="section">
            <Canvas camera={{ position: [0.0, 0.0, 7.0] }}>
                <Blob />
                <OrbitControls enableZoom={false} rotateSpeed={0.5} />
            </Canvas>
        </section>
    )
}

export default BlobScene