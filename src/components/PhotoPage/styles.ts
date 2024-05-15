import { css } from "@emotion/react";

export const Image = css`
    max-width: 500px;
    display: block;
    margin: 0 auto;
`

export const Info = css`
    display: flex;
    align-items: flex-start;
    gap: 40px;
    width: 100%;

    span {
        color: #767676;
    }
`

export const Tag = css`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;

    a {
        background-color: #eee;
        border-radius: 4px;
        color: #555;
        display: inline-block;
        padding: 4px 10px;
        text-decoration: none;
        text-transform: capitalize;
        transition: all .1s ease-in-out;
        font-size: 14px;
    }
`