import React from 'react';
import './WhatsAppButton.css';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <a href="https://wa.me/573157659580" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
            <div className="whatsapp-button-content">
                <FaWhatsapp className="whatsapp-icon" />
                <span className="whatsapp-text">Contáctenos</span>
            </div>
        </a>
    );
};

export default WhatsAppButton;
