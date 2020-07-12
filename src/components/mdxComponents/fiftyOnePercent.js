import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';

import { makeStyles as useStyles } from '@material-ui/core/styles';

const step1 = require('../images/51_1.png');
const step2 = require('../images/51_2.png');
const step3 = require('../images/51_3.png');
const step4 = require('../images/51_4.png');

const FiftyOnePercent = () => {
    const [step, setStep] = useState(1)

    const classes = useStyles({
        logo: {
            width: 150,
            height: 150
        }
    })();


    if (step < 1) {
        setStep(1);
    } 

    if (step > 4) {
        setStep(4)
    }
    return (
        <div style={{ border: "1px black solid", padding: "10px" }}>
            {step === 1 && (
                <p><b>Step 1</b>: The green blocks represent benign transactions that are being broadcasted to the blockchain by real users. The red transactions are those performed by a hacker attempting to do a 51% attack. Click "Next" on the right for the next step</p>
            )}
            {step === 2 && (
                <p><b>Step 2</b>: The malicious hacker gains 51% or greater of the network computational power and is able to add on more blocks than the other nodes on the network combined.</p>
            )}
            {step === 3 && (
                <p><b>Step 3</b>: The hacker now broadcasts the malicious transactions to the blockchain so that other nodes pick it up as the source of truth.</p>
            )}
            {step === 4 && (
                <p><b>Step 4</b>: In the final step, we can see that the hacker has successfully completed the 51% attack and their set of transactions is now the "correct" chain, signified by the green. They now have their malicious transactions in the state of the blockchain.</p>
            )}
            <br />
            <div style={{ display: "flex", alignItems: "center" }}>
                <button onClick={() => setStep(step - 1)} style={{ cursor: "pointer", padding: "10px", height: "200px", visibility: step > 1 ? "initial" : "hidden" }}>
                    <p>Prev</p>
                    <p style={{ fontSize: "32px" }}>&#x21E6;</p>
                </button>
                {step === 1 && (
                    <img style={{ width: "80%" }} src={step1} />
                )}
                {step === 2 && (
                    <img style={{ width: "80%" }} src={step2} />
                )}
                {step === 3 && (
                    <img style={{ width: "80%" }} src={step3} />
                )}
                {step === 4 && (
                    <img style={{ width: "80%" }} src={step4} />
                )}
                <button onClick={() => setStep(step + 1)} style={{ cursor: "pointer", padding: "10px", height: "200px", visibility: step < 4 ? "initial" : "hidden" }}>
                    <p>Next</p>
                    <p style={{ fontSize: "32px" }}>&#x21E8;</p>
                </button>
            </div>
        </div>
    )
};

export default FiftyOnePercent;
