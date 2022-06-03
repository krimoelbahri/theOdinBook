import { createGlobalStyle } from "styled-components";
import klavikaLight from "./klavika/klavika-light.otf";
export default createGlobalStyle`
    @font-face {
        font-family: 'klavika';
        src: url(${klavikaLight}) format("opentype");
    }
`;
