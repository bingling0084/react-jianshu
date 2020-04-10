import styled from 'styled-components';
import logoImg from '../../statics/images/header_logo.png';
import beta from '../../statics/images/header_beta.png';

export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoImg});
    background-size: contain;
`

export const Nav = styled.div`
    margin: 0 auto;
    width: 960px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
`

export const NavItem = styled.div`
    height: 100%;
    line-height: 56px;
    padding: 0 15px;
    font: 17px;
    color: #969696;
    &.left {
        float: left;
    }
    &.right {
        float: right;
    }
    &.active {
        color: #ea6f5a;
    }
    &.logo {
        background: url(${beta});
        background-size: contain;
        margin-top: 15px;
        margin-left: 15px;
        height: 25px;
        width: 40px;
        background-repeat: no-repeat;
    }
`

export const SearchWrapper = styled.div`
    float:left;
    position: relative;
    
    .zoom {
        position: absolute;
        text-align: center;
        right: 5px;
        bottom: 5px;
        color: #999;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        &.focused {
            background: #999;
            color: #666;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    outline: none;    
    box-sizing: border-box;
    border: none;
    border-radius: 19px;
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 32px 0 20px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 250px;
    }
    &.slide-enter {
        transition:  all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    top: 56px;
    left: 0;
    width:240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    overflow: hidden;
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoToggle = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        float: left;
        display: block;
        font-size: 12px;
        margin-right: 4px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`

export const SearchInfoItem = styled.a`
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
`

export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 15px;
    &.reg {
        color: #ec6149;
    }
    &.write {
        background: #ec6149;
        color: #fff;
    }
`