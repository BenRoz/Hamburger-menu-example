import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 60px;
  line-height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background: white;
  z-index: 2;
  position: relative;
  justify-content: flex-end;
  border-bottom: 1px solid #eee;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  align-items: center;
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const LogoImg = styled.img`
    margin: 6px 2px 8px 0px;
    height: 20px;
    vertical-align: middle;
`;

const Logo = styled.div`
${props => props.column};
margin-right:${props => props.smallScreen ? null : 'auto'};
margin:${props => props.smallScreen ? 'auto' : null};
height: inherit;
padding: 0 15px;
font-size: 16px;
cursor: pointer;

`;

const HeaderMenu = styled.div`
width: 48%;
height: inherit;
display: flex;
align-items: center;
justify-content: space-evenly;
`;

const MenuItem = styled.div`
color: #666;
font-size: 16px;
font-weight: bolder;
letter-spacing: 1px;
>a{
  padding: 2px 2px;
  cursor: pointer;
}
`;
export { HeaderWrapper, Logo, HeaderMenu, MenuItem, LogoImg };
