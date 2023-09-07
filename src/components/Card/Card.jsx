import React from 'react';
import styles from './Card.module.css';
import styled from 'styled-components';

const Wrapper = styled.article`
  border-radius: var(--border-radius);
  background-color: var(--colors-ui-base);
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardTitle = styled.h3`
  color: var(--colors-text);
`;

const CardList = styled.ul``;

const CardListItem = styled.li`
  list-style: none;
  color: var(--colors-text);
  margin-bottom: 8px;
`;

const Card = ({img, name, info = [], onClick}) => {
    return (
        <Wrapper onClick={onClick}>
            <CardImage src={img} />
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
