import BlobScene from '../../scenes/BlobScene'
import './styles.modules.css'

const DeployedAt = () => (
    <div className='container'>
        <p>Deployed at 02/14/2023 12:15:54</p>
        <BlobScene />
        <img className='img-dog' src='/dogs.jpg' alt='dogs' />
    </div>
)

export default DeployedAt