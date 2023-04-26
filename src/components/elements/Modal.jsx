import React from 'react';
import '../../styles/style.css';
import PropTypes from 'prop-types';

function Modal ({ onClose }) {

    //
    return (
        <div className="container">
                <div className="modal">
                <h2>The Metamorphosis / Franz Kafka</h2>
                <button type="button" className="button CloseButton" onClick={onClose}>×</button>

        <p className="content">One morning as Gregor Samsa was waking up from anxious dreams he discovered that in bed he had been changed into a monstrous verminous bug He lay on his armour-hard back and saw as he lifted his head up a little his brown arched abdomen divided up into rigid bow-like sections From this height the blanket just about ready to slide off completely could hardly stay in place His numerous legs which were pitifully thin compared to the rest of his bulk waved helplessly before his eyes
            <br />
What has happened to me he thought It was no dream His room a regular human room only somewhat too small lay quiet between the four well-known walls Above the table on which an unpacked collection of sample cloth goods was spread out Samsa was a picture that he had recently cut out of an illustrated magazine and put into a pretty gilt frame It showed a lady done up in a fur hat and a fur boa sitting upright and raising up against the viewer a heavy fur muff in which her whole forearm had disappeared
            <br />
Gregors gaze then turned to the window and the overcast weather he could hear raindrops hitting against the metal window ledge completely depressed him Just why was he condemned to work for a company where they immediately became highly suspicious at the slightest lapse from the norm Were all employees every one of them louts was there not one of them who was faithful and devoted who would go so mad with pangs of conscience that he couldnt get out of bed if he didnt spend at least a couple of hours in the morning on company business Was it really not enough to let one of the trainees make enquiries assuming enquiries were even necessary did the chief clerk himself have to come and did they have to show the whole innocent family that this was so suspicious that only the chief clerk could be trusted to have the wisdom to investigate it And more because these thoughts had made him upset than through any proper decision he swung himself with all his might out of the bed There was a loud thud but it wasnt a real crash</p>
                <button type="button" className="button CloseTextButton" onClick={onClose}>Close</button>
                </div>
        </div>

    );
};


Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Modal;
