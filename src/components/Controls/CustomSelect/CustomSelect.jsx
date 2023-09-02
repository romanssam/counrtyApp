import React from 'react';
import styled from 'styled-components'
import Select from 'react-select'

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-ui-base)',
            color: 'var(--colors-text)',
            borderRadius: 'var(--border-radius)',
            padding: '0.25rem',
            border: 'none',
            boxShadow: 'var(--shadow)',
            height: '50px',
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: 'var(--colors-text)',
            backgroundColor: state.isSelected ? 'var(--colors-ui-base)' : 'var(--colors-bg)'
        })
    },
})`
  width: 300px;
  border-radius: var(--border-radius);
  font-family: var(--family);
  border: none;
  
  & > * {
    box-shadow: var(--shadow);
  }
  
  & > * {
    color: var(--colors-text) !important;
  }
`;