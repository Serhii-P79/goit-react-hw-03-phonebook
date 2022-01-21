import styled from 'styled-components';

export const CssContactList = {
  ContactList: styled.ul`
    > :not(:last-child) {
      margin-bottom: 10px;
    }
  `,

  Contact: styled.li`
    font-size: 18px;

    ::before {
      content: '✔.';
      margin-right: 10px;
      color: ${({ theme }) => theme.color.checkMark};
    }
  `,

  Name: styled.span`
    min-width: 200px;
    display: inline-block;
  `,

  Number: styled.span`
    min-width: 150px;
    display: inline-block;
  `,
};
