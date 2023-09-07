import React from 'react';
import styles from './Card.module.css';
import styled from 'styled-components';

const Wrapper = styled.article``;

const CardImage = styled.img``;

const CardBody = styled.div``;

const CardTitle = styled.h3``;

const CardList = styled.ul``;

const CardListItem = styled.li``;

const Card = ({img, name, info = [], onClick}) => {
    return (
        <Wrapper onClick={onClick}>
            <CardImage/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map(item => (
                        <CardListItem key={item.title}>
                            <span>{item.title}: {item.description}</span>
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
        </Wrapper>
    );
};

export default Card;
