import React, { useState, useEffect } from 'react';
import './Feature.css'; // Import the CSS file

const Feature = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sides = ['front', 'right', 'back', 'left', 'top', 'bottom'];

    const sideContent = {
        front: "Utilizes blockchain technology to encrypt and secure patient data, ensuring it can only be accessed by authorized parties with the patient's consent, significantly reducing the risk of data breaches",
        right: "Empowers patients with complete control over their health records, allowing them to grant or revoke access to healthcare providers as needed, thereby maintaining privacy and autonomy over personal health information.",
        back: "Facilitates seamless data sharing across different healthcare providers and systems through standardized protocols, ensuring that patient information is accessible and up-to-date regardless of where care is received.",
        left: "Employs smart contracts to automate consent management and data sharing processes, ensuring compliance with privacy regulations and enhancing the efficiency of healthcare delivery.",
        top: "Provides transparent and tamper-proof records of all interactions with patient data, enabling patients and providers to track access and modifications, thereby ensuring accountability and trust.",
        bottom: "Designed with scalability in mind, leveraging IPFS for off-chain data storage and Ethereum for blockchain transactions, ensuring the system can handle a growing number of users and health records without compromising performance."
    };
    const headcontent = {
         front: "Enhanced Data Security",
         right: "Patient-Centric Control",
         back : "Interoperability",
         left: "Smart Contract Automation",
         top: "Immutable Audit Trails",
         bottom: "Scalable Infrastructure",

    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % sides.length);
        }, 2000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [sides.length]);

    const showClass = `show-${sides[currentIndex]}`;

    return (
        <div className="featuresection">
            <div className="scene">
                <div className={`cube ${showClass}`}>
                    <div className="cube__face cube__face--front"></div>
                    <div className="cube__face cube__face--back"></div>
                    <div className="cube__face cube__face--right"></div>
                    <div className="cube__face cube__face--left"></div>
                    <div className="cube__face cube__face--top"></div>
                    <div className="cube__face cube__face--bottom"></div>
                </div>
            </div>
            <div className="content">
                <p id="cube-content">
                    <h1 id='head-content'>  {headcontent[sides[currentIndex]]}</h1>
                    {sideContent[sides[currentIndex]]}
                    </p>
            </div>
        </div>
    );
};

export default Feature;