import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';

import styled from '@emotion/styled';
import { makeStyles as useStyles } from '@material-ui/core/styles';

const ADDR_SIZE = 12;
const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

const transactions = [
    {
        sender: "1F67WtwkgyV3KitMBAmYoSJn7SD2bb2Mbj",
        receiver: "1DWod6wBBrRRuCddDud9roudyFQPbgbEjJ",
        randomizedSender: genRanHex(ADDR_SIZE),
        randomizedReceiver: genRanHex(ADDR_SIZE),
        senderName: "Alice",
        receiverName: "Bob",
        amount: 1
    },
    {
        sender: "1F67WtwkgyV3KitMBAmYoSJn7SD2bb2Mbj",
        receiver: "1EWsoa84RHBwZ9HbCfeUyJh3qMB5xntyH1",
        randomizedSender: genRanHex(ADDR_SIZE),
        randomizedReceiver: genRanHex(ADDR_SIZE),
        senderName: "Alice",
        receiverName: "Eve",
        amount: 5
    },
    {
        sender: "36RYGSB921qhXPgBfJi91MUSD2UkHoWhA8",
        receiver: "1F67WtwkgyV3KitMBAmYoSJn7SD2bb2Mbj",
        randomizedSender: genRanHex(ADDR_SIZE),
        randomizedReceiver: genRanHex(ADDR_SIZE),
        senderName: "Adam",
        receiverName: "Alice",
        amount: 3
    },
    {
        sender: "36RYGSB921qhXPgBfJi91MUSD2UkHoWhA8",
        receiver: "1DWod6wBBrRRuCddDud9roudyFQPbgbEjJ",
        randomizedSender: genRanHex(ADDR_SIZE),
        randomizedReceiver: genRanHex(ADDR_SIZE),
        senderName: "Adam",
        receiverName: "Bob",
        amount: 1
    },
    {
        sender: "1DWod6wBBrRRuCddDud9roudyFQPbgbEjJ",
        receiver: "14NeUdZT5RXVpD452vweBbQ9LYEV6Lsijb",
        randomizedSender: genRanHex(ADDR_SIZE),
        randomizedReceiver: genRanHex(ADDR_SIZE),
        senderName: "Bob",
        receiverName: "Olivia",
        amount: 3
    },
]




const PublicTransaction = ({ transaction }) => {
    const { sender, receiver, senderName, receiverName, amount } = transaction;
    const [asked, setAsked] = useState(false);


    return (
        <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between", marginBottom: "10px", height: "40px" }}>
            {!asked && <p className={!asked ? "visible" : "hidden"}><span style={{ color: "blue" }}>{sender.slice(0, ADDR_SIZE)}</span> sent <span style={{ color: "green" }}>{amount} BTC</span> to <span style={{ color: "purple" }}>{receiver.slice(0, ADDR_SIZE)}</span></p>}
            <div className={asked ? "visible" : "hidden"}>{asked && <p><span style={{ color: "blue" }}>{senderName}</span> sent <span style={{ color: "green" }}>{amount} BTC</span> to <span style={{ color: "purple" }}>{receiverName}</span></p>}</div>
            {!asked && 
                <button style={{ marginLeft: "10px", padding: "10px" }} onClick={() => setAsked(true)}>
                    Ask exchange for address info
                </button>
            }
        </div>
    )
}

const PrivateTransaction = ({ transaction }) => {
    const { sender, receiver, randomizedReceiver, randomizedSender, senderName, receiverName, amount } = transaction;

    return (
        <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between", marginBottom: "10px", height: "40px" }}>
            <p><span style={{ color: "blue" }}>{sender.slice(0, ADDR_SIZE)}</span> sent <span style={{ color: "green" }}>{amount} BTC</span> to <span style={{ color: "purple" }}>{receiver.slice(0, ADDR_SIZE)}</span></p>

            <p><span style={{ color: "blue" }}>{randomizedSender}</span> sent <span style={{ color: "green" }}>unknown amount</span> to <span style={{ color: "purple" }}>{randomizedReceiver}</span></p>
            
            <p>
                <span style={{ color: "blue" }}>{senderName}</span> sent <span style={{ color: "green" }}>{amount} BTC</span> to <span style={{ color: "purple" }}>{receiverName}</span>
            </p>
            
        </div>
    )
}

const BitcoinVsZcash = () => {
    const [visual, setVisual] = useState("PUB")

    return (
        <Fragment>
            <div style={{ border: "1px black solid", padding: "10px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", paddingBottom: "20px", width: "400px" }}>
                        <p style={{ marginBottom: "10px" }}><u>Choose one</u></p>
                        <div>{visual === "PUB" && <span>&#8594;</span>}<a onClick={() => setVisual("PUB")} style={{ cursor: "pointer", marginBottom: "5px" }}>Public blockchain</a></div>
                        <div>{visual === "ZKP" && <span>&#8594;</span>}<a onClick={() => setVisual("ZKP")} style={{ cursor: "pointer", marginBottom: "5px" }}>Zero knowledge proofs</a></div>
                    </div>
                    {visual === "PUB" && <p>This is a list of transactions as we would see on the public blockchain. It is easy to take a users address and find their real identity.</p>}
                    {visual === "ZKP" && <p>This is a list of transactions as we would see when using zero knowledge proofs for extra privacy. There is no known info about the sender, receiver, or even amount of each transaction as these are randomized and made private.</p>}
                </div>
                <h4><u>List of transactions</u></h4>
                {visual === "PUB" && <div>
                    {transactions.map(transaction => <PublicTransaction transaction={transaction} />)}
                </div>}
                {visual === "ZKP" && <div>
                    <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between", marginBottom: "10px", height: "40px" }}>
                        <h4>Public Blockchain Transactions</h4>
                        <h4>Private Transactions using ZKP</h4>
                        <h4>Actual Transaction</h4>
                    </div>
                    {transactions.map(transaction => <PrivateTransaction transaction={transaction} />)}
                </div>}
            </div>
            <p style={{ textAlign: "center", marginTop: "10px" }}>Bitcoin transactions vs transactions using zero knowledge proofs</p>
        </Fragment>
    )
};

export default BitcoinVsZcash;
