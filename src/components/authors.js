import React from 'react';
import styled from '@emotion/styled';

const rishubProfile = require('./images/rishub_profile.png');

const AuthorContainer = styled('div')`
    border-top: 1px solid #cdcfd2;
    border-bottom: 1px solid #cdcfd2;
    padding: 20px 0;
`

const AuthorImg = styled('img')`
    width: 50px;
    height: 50px;
    border-radius: 30px;
`

const Author = ({ imgSrc, name, description }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
        <AuthorImg src={imgSrc} alt="" />
        <div style={{ marginLeft: "10px" }}>
            <p style={{ fontWeight: "bold" }}>{name}</p>
            <p style={{ fontSize: "14px" }}>{description}</p>
        </div>
    </div>
)

const Authors = () => {
  return (
        <AuthorContainer>
            <h4 style={{ marginBottom: "20px" }}>Written By</h4>
            <Author imgSrc={rishubProfile} name="Rishub Kumar" description="Solutions Engineer at Alchemyapi.io" />
        </AuthorContainer>
  )
};

export default Authors;
