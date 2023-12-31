import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  padding: 2rem 0;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  & > article {
    flex: 1 1 23%;
  }
`

const List = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default List;
