import styled from 'styled-components';

export const CssForm = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    padding: 15px;
    border: 1px solid;
    width: 400px;
    justify-content: start;
    align-items: self-start;

    > :not(:last-child) {
      margin-bottom: 15px;
    }
  `,

  Label: styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 20px;

    > :first-child {
      margin-bottom: 5px;
    }

    input {
      width: 250px;
      font-weight: 400;
    }
  `,

  Button: styled.button`
    padding: 4px 16px;
    border-radius: 7px;
    min-width: 80px;
    cursor: pointer;
    font-weight: 700;
    :hover {
      background-color: ${({ theme, name }) => {
        switch (name) {
          case 'add':
            return theme.color.buttonHoverAdd;

          case 'del':
            return theme.color.buttonHoverDel;

          default:
        }
      }};
    }
  `,
};
