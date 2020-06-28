import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import styled from '@emotion/styled';
import { makeStyles as useStyles } from '@material-ui/core/styles';

const ideal = [
    <p style={{ color: "green" }}>Item is farmed</p>,
    <p style={{ color: "green" }}>Item checked in at a drop-off point</p>,
    <p style={{ color: "green" }}>Loaded into international boat</p>,
    <p style={{ color: "green" }}>Arrives at US Port</p>,
    <p style={{ color: "green" }}>Arrives at distributor warehouse</p>,
    <p style={{ color: "green" }}>Arrives at grocery store and is scanned</p>,
]

const tampering = [
    <p style={{ color: "green" }}>Item is farmed</p>,
    <p style={{ color: "green" }}>Item checked in at a drop-off point</p>,
    <p style={{ color: "green" }}>Loaded into international boat</p>,
    <p style={{ color: "red" }}>Arrives at US Port and is replaced with counterfeit item</p>,
    <p style={{ color: "red" }}>Counterfeit item arrives at distributor warehouse</p>,
    <p style={{ color: "red" }}>Arrives at grocery store and counterfeit item is scanned as real</p>,
]

const oracles = [
    <p style={{ color: "green" }}>Item is farmed</p>,
    <p style={{ color: "green" }}>Item checked in at a drop-off point</p>,
    <p style={{ color: "green" }}>Loaded into international boat</p>,
    <Fragment>
        <p style={{ color: "red" }}><strike>Arrives at US Port and is replaced with counterfeit item</strike></p>
        <p style={{ color: "green" }}>Counterfeit item is detected (using weight sensor, etc.) and marked as so on the blockchain</p>
    </Fragment>,
    <p style={{ color: "green" }}>Counterfeit item arrives at distributor warehouse and is discarded based on blockchain data</p>,
    <p style={{ color: "green" }}>Only real items arrive at grocery store</p>,
]

const VerticalLine = styled('div')`
    border-left: 1px solid;
    height: 50px;
    margin-left: 30%;
`

const TimelineParagraph = styled('p')`
    max-width: 75px;
    margin-left: calc(30% - 75px);
    align-self: flex-end;
    margin-bottom: 10px;
`

const TimelineParagraphBottom = styled(TimelineParagraph)`
    align-self: flex-start;
    margin-top: 10px;
`

const OracleExamples = () => {
    const [items, setItems] = useState(ideal)
    
    return (
        <Fragment>
            <div style={{ border: "1px black solid", padding: "10px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ marginBottom: "10px" }}><u>Choose a timeline</u></p>
                    <div>{items === ideal && <span>&#8594;</span>}<a onClick={() => setItems(ideal)} style={{ cursor: "pointer", marginBottom: "5px" }}>Ideal timeline</a></div>
                    <div>{items === tampering && <span>&#8594;</span>}<a onClick={() => setItems(tampering)} style={{ cursor: "pointer", marginBottom: "5px" }}>Tampered with timeline</a></div>
                    <div>{items === oracles && <span>&#8594;</span>}<a onClick={() => setItems(oracles)} style={{ cursor: "pointer", marginBottom: "5px" }}>Oracles timeline</a></div>
                </div>

                <div style={{ display: "flex" }}>
                    <TimelineParagraph style={{ marginLeft: "14%" }}>{items[0]}</TimelineParagraph>
                    <TimelineParagraph>{items[2]}</TimelineParagraph>
                    <TimelineParagraph>{items[4]}</TimelineParagraph>
                </div>
                <div style={{ display: "flex" }}>
                    <VerticalLine style={{ marginLeft: "15%" }} />
                    <VerticalLine />
                    <VerticalLine />
                </div>
                <hr />
                <div style={{ display: "flex" }}>
                    <VerticalLine />
                    <VerticalLine />
                    <VerticalLine />
                </div>
                <div style={{ display: "flex" }}>
                    <TimelineParagraphBottom style={{ marginLeft: "29%" }}>{items[1]}</TimelineParagraphBottom>
                    <TimelineParagraphBottom>{items[3]}</TimelineParagraphBottom>
                    <TimelineParagraphBottom>{items[5]}</TimelineParagraphBottom>
                </div>
            </div>
            <p style={{ textAlign: "center", marginTop: "10px" }}>Different timelines of an item being imported to the US</p>
        </Fragment>
    )
};

export default OracleExamples;
