import React from 'react';
import styled, { css } from "styled-components";
import {
    Card, CardImg, CardText, CardBody, Button
  } from 'reactstrap';
import {Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const StyledP = styled.p`
  font-weight: bold;
`;

const StyledProp = styled.p`
  color: dodgerblue;
`;


const StyledButton = styled.button`
padding: 0.5%;
background-color: dodgerblue;
border-radius: 10px;
`;


const StyledH1 = styled.h1`
color: white;
margin-bottom: 2%;
background-color: #007bff;
border-radius: 5px;
padding: 0.5%;
`;

function Cards(props) {
    return (
    <div>
    <Col xs="12">
        <Card className="Card">
            <CardBody className="Cards">
                <StyledH1>{props.name}</StyledH1>
                <CardText><StyledP>Height:</StyledP> <StyledProp>{props.height}</StyledProp></CardText>
                <CardText><StyledP>Hair Color:</StyledP> <StyledProp>{props.hair_color}</StyledProp></CardText>
                <CardText><StyledP>Skin Color:</StyledP> <StyledProp>{props.skin_color}</StyledProp></CardText>
                <CardText><StyledP>Eye Color:</StyledP> <StyledProp>{props.eye_color}</StyledProp></CardText>
                <CardText><StyledP>Birth Year:</StyledP> <StyledProp>{props.birth_year}</StyledProp></CardText>
                <CardText><StyledP>Gender:</StyledP> <StyledProp>{props.gender}</StyledProp></CardText>
                <CardText><StyledP>Mass:</StyledP> <StyledProp>{props.mass}</StyledProp></CardText>
                <StyledButton><Button color="primary">Learn more about {props.name}</Button></StyledButton>
            </CardBody>
        </Card>
    </Col>
    </div>
    )
};

export default Cards