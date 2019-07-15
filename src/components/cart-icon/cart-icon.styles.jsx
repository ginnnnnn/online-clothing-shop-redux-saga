import styled from 'styled-components';

export const CartIconContainer = styled.div`
    width:45px;
    height:45px;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .shopping-icon{
        height:24px;
        width:24px;
    }
`;

export const ItemCountContainer = styled.span`
    position: absolute;
    font-size:10px ;
    font-weight: bold;
    bottom:12px;
`;

