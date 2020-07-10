import * as React from 'react';
import { Fragment } from 'react';
import styled from '@emotion/styled';

const ResourcesBox = styled('div')`
    width: 200px;
    padding: 10px;
    border-left: 1px solid black;
    align-self: stretch;
`

const ResourcesBoxMobile = styled('div')`
    width: 60%;
    padding: 10px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    align-self: stretch;
`

const Resources = ({ text, resources, title }) => {
  return (
      <Fragment>
      <div className="hiddenMobile" style={{ display: "flex",  alignItems: "center", marginRight: "-200px" }}>
        <p className="paragraph">{text}</p>
        <div style={{ paddingLeft: "50px", maxWidth: "200px" }}>
            <ResourcesBox>
                <h4 style={{ marginBottom: "5px" }}>
                    {title || 'Resources'}<i className="material-icons" style={{ fontSize: "20px" }}>lightbulb_outline</i>
                </h4>
                {resources.map(({ text, link }) => {
                    if (link) {
                        return (
                            <a 
                            style={{ display: "block", fontSize: "14px", marginTop: "8px" }} 
                            href={link} target="_blank" rel="noopener noreferrer" 
                            key={link}
                            >
                                {text}
                            </a>
                        )
                    }

                    return (
                        <p 
                        style={{ display: "block", fontSize: "14px", marginTop: "8px" }} 
                        href={link} target="_blank" rel="noopener noreferrer" 
                        key={link}
                        >
                            {text}
                        </p>
                    ); 
                })}
            </ResourcesBox>
        </div>
      </div>
      <div className="visibleMobileView">
        <p className="paragraph">{text}</p>
        <div>
            <ResourcesBoxMobile>
                <h4 style={{ marginBottom: "5px" }}>
                    {title || 'Resources'}<i className="material-icons" style={{ fontSize: "20px" }}>lightbulb_outline</i>
                </h4>
                {resources.map(({ text, link }) => {
                    if (link) {
                        return (
                            <a 
                            style={{ display: "block", fontSize: "14px", marginTop: "8px" }} 
                            href={link} target="_blank" rel="noopener noreferrer" 
                            key={link}
                            >
                                {text}
                            </a>
                        )
                    }

                    return (
                        <p 
                        style={{ display: "block", fontSize: "14px", marginTop: "8px" }} 
                        href={link} target="_blank" rel="noopener noreferrer" 
                        key={link}
                        >
                            {text}
                        </p>
                    ); 
                })}
            </ResourcesBoxMobile>
        </div>
    </div>
      </Fragment>
  )
};

export default Resources;
