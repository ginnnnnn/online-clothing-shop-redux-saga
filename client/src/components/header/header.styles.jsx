import styled from 'styled-components'
import { Link } from 'react-router-dom';

// const OptionContainerStyles = css`
//         padding:10px 15px;
//         cursor: pointer;
// `;

export const HeaderContainer = styled.div`
        width:100%;
        height:70px;
        display:flex;
        justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
        height:100%;
        width:70px;
        padding:25px;
`;

export const OptionsContainer = styled.div`
        display: flex;
        align-items:center;
        width:50%;
        height:100%; 
        justify-content:flex-end;
        cursor: pointer;
`;

export const OptionLink = styled(Link)`
        padding:10px 15px;
        cursor: pointer;
`;
