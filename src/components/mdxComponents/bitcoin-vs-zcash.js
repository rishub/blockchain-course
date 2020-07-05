import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';

import styled from '@emotion/styled';
import { makeStyles as useStyles } from '@material-ui/core/styles';

const transactions = [
    {
        sender: "1F67WtwkgyV3KitMBAmYoSJn7SD2bb2Mbj",
        receiver: "1DWod6wBBrRRuCddDud9roudyFQPbgbEjJ",
        senderName: "Alice",
        receiverName: "Bob",
        amount: 1
    },
    {
        sender: "1F67WtwkgyV3KitMBAmYoSJn7SD2bb2Mbj",
        receiver: "1EWsoa84RHBwZ9HbCfeUyJh3qMB5xntyH1",
        senderName: "Alice",
        receiverName: "Eve",
        amount: 5
    },
    {
        sender: "36RYGSB921qhXPgBfJi91MUSD2UkHoWhA8",
        receiver: "1F67WtwkgyV3KitMBAmYoSJn7SD2bb2Mbj",
        senderName: "Adam",
        receiverName: "Alice",
        amount: 3
    },
    {
        sender: "36RYGSB921qhXPgBfJi91MUSD2UkHoWhA8",
        receiver: "1F67WtwkgyV3KitMBAmYoSJn7SD2bb2Mbj",
        senderName: "Adam",
        receiverName: "Alice",
        amount: 3
    },
    {
        sender: "1DWod6wBBrRRuCddDud9roudyFQPbgbEjJ",
        receiver: "14NeUdZT5RXVpD452vweBbQ9LYEV6Lsijb",
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
            {!asked && <p className={!asked ? "visible" : "hidden"}><span style={{ color: "blue" }}>{sender.slice(0, 15)}</span> sent <span style={{ color: "green" }}>{amount} BTC</span> to <span style={{ color: "purple" }}>{receiver.slice(0, 15)}</span></p>}
            <div className={asked ? "visible" : "hidden"}>{asked && <p><span style={{ color: "blue" }}>{senderName}</span> sent <span style={{ color: "green" }}>{amount} BTC</span> to <span style={{ color: "purple" }}>{receiverName}</span></p>}</div>
            {!asked && 
                <button style={{ marginLeft: "10px", padding: "10px" }} onClick={() => setAsked(true)}>
                    Ask exchange for address info
                </button>
            }
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
                    {visual === "ZKP" && <p>This is a list of transactions as we would see when using zero knowledge proofs for extra privacy. There is no known info about the sender, receiver, or even amount of each transaction.</p>}
                </div>
                <h4><u>List of transactions</u></h4>
                {visual === "PUB" && <div>
                    {transactions.map(transaction => <PublicTransaction transaction={transaction} />)}
                </div>}
                {visual === "ZKP" && <div>
                    {transactions.map(transaction => <p style={{ height: "40px", paddingTop: "10px" }}><span style={{ color: "blue" }}>Unknown address</span> sent <span style={{ color: "green" }}>unknown amount</span> to <span style={{ color: "purple" }}>unknown address</span></p>)}
                </div>}
            </div>
            <p style={{ textAlign: "center", marginTop: "10px" }}>Bitcoin transactions vs transactions using zero knowledge proofs</p>
        </Fragment>
    )
};

export default BitcoinVsZcash;
