import { useState } from 'react';
import Modal from '../../components/Modal';

export default {
    title: 'Component/Modal',
    component: Modal
}

export const Default = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button onClick={() => setVisible(true)}>Show Modal</button>
            <Modal visible={visible} onClose={() => setVisible(false)}>I'm Modal
            <button onClick={() => setVisible(false)}>I'm Close.</button>
            </Modal>
        </div>  
    );
};