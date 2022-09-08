import { Global, css } from '@emotion/react';

const style = css`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    #root {
        max-width: 1440px;
        min-width: 1200px;
        margin: auto;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        list-style: none;
    }
`;

const GlobalStyle = () => {
    return <Global styles={style} />;
};

export default GlobalStyle;