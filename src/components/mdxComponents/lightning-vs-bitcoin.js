import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';

import { makeStyles as useStyles } from '@material-ui/core/styles';
import './lightning-vs-bitcoin.css';

const lightningLogo = require('../images/lightning.png')
const bitcoinLogo = require('../images/bitcoin.png')

const LightningVsBitcoin = () => {
    const [numBitcoinTxns, setBitcoinTxns] = useState(0);
    const [numLightningTxns, setLightningTxns] = useState(0);

    useEffect(() => {
        setTimeout(() => setBitcoinTxns(numBitcoinTxns + 1), 200);
    }, [numBitcoinTxns])

    useEffect(() => {
        setTimeout(() => setLightningTxns(numLightningTxns + 20), 20)
    }, [numLightningTxns])

    const classes = useStyles({
        logo: {
            width: 150,
            height: 150
        }
    })();


    return (
        <Fragment>
            <div style={{ border: "1px black solid", padding: "10px" }}>
                <div id="bitcoin">
                    <img className={classes.logo} src={bitcoinLogo} />
                </div>
                <div id="lightning">
                    <img className={classes.logo} src={lightningLogo} />
                </div>
                <p>Number of bitcoin txns: {numBitcoinTxns}</p>
                <p>Number of lightning network txns: {numLightningTxns}</p>
            </div>
            <p style={{ textAlign: "center", marginTop: "10px" }}>The speed of the lightning network relative to bitcoin</p>
        </Fragment>
    )
};

export default LightningVsBitcoin;
