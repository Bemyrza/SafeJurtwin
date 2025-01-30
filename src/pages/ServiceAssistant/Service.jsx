import React from 'react';
import classes from './Servise.module.scss';
import backtage from '../../assets/images/backtage.png';
import backicon from '../../assets/images/backicon.png';
import point from '../../assets/images/point.png';
import Footer from '../../components/Footer/Footer';

export default function Service() {
    const handleCall = (number) => {
        window.location.href = `tel:${number}`;
    };

    return (
        <section>
            <div className={classes.section}>
                <div className={classes.service}>
                    <div className={classes.service__blocks}>
                        {[
                            { number: '101', description: '- служба пожарной охраны' },
                            { number: '102', description: '- полиция' },
                            { number: '103', description: '- служба скорой медицинской помощи   ' },
                        ].map((block, index) => (
                            <div className={classes.service__block} key={index} onClick={() => handleCall(block.number)}>
                                <h2>{block.number}</h2>
                                <p>{block.description}</p>
                                <img src={point} alt="Point icon" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={classes.imagesContainer}>
                    <img src={backtage} alt="Background" className={classes.backtage} />
                    <img src={backicon} alt="Icon" className={classes.backicon} />
                </div>
            </div>
            <div className={classes.footer}>
                <Footer />

            </div>
        </section>
    );
}


