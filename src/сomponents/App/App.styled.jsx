import styled from 'styled-components';

export const CssApp = {
  Contener: styled.div`
    padding: 25px;

    > :not(:last-child) {
      margin-bottom: 15px;
    }
  `,
};
