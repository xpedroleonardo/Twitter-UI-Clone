import styled, { css } from "styled-components";

import { Cake, LocationOn } from '../../styles/Icons';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    max-height: 100%;
    overflow-y: auto; 

    scrollbar-width: none; /**firefox */
    ::-webkit-scrollbar{
        display: none;
    }
`;

export const Banner = styled.div`
    flex-shrink: 0;

    width: 100%;
    height: min(33vw, 199px);

    background: var (--twitter);

    position: relative;

`;

export const Avatar = styled.div`
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));

    border: 3.75px solid var(--primary);
    background: var(--gray);
    border-radius: 50%;

    position: absolute;
    bottom: max(-60px, -10vw);
    left: 15px;
`;

export const ProfileData = styled.div`
    padding: min(calc(10vw + 7px), 67px) 16px 0;

    display: flex;
    flex-direction: column;

    position: relative;
    
    > h1{
        font-weight: bold;
        font-size: 19px;
    }

    > h2{
        font-weight: normal;
        font-size: 15px;
    
        color: var(--gray);
    }

    > p{
        font-size: 15px;
        margin-top: 11px;
    }

    > ul{
        list-style: none;
        margin: 10px 0;

        > li{
            display: flex;
            align-items: center;

            font-size: 15px;
            color: var(--gray);

            >svg {
                fill: var(--gray);
                margin-right: 5px;
            }
        }
    }

`;

const iconCSS = css`
    width: 20px;
    height: 20px;

    color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`${iconCSS}`;

export const CakeIcon = styled(Cake)`${iconCSS}`;

export const Followage = styled.div`
    display: flex;

    > span{
        font-size: 15px;
        color: var(--gray);

        & + span {
            margin-right: 20px;
        }
    }
`;
