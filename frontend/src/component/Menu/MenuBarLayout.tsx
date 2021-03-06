import * as React from 'react';
import styled from 'styled-components';

interface IMenuBarLayoutProps {
  backgroundColor: string;
  showSideBar: boolean;
  children: any;
}

interface ILayoutProps {
  backgroundColor: string;
}

const Layout = styled.div`
  background-color: ${(props: ILayoutProps) => props.backgroundColor};
  color: white;
  position: fixed;
  z-index: 999;
  width: 100vw;
  display: flex;
  align-items: center;
  height: 70px;
  top: 0;
  left: 0;
  border-bottom-width: 0.1px;
  border-bottom-color: #383a3f;
  border-bottom-style: solid;
`;

const MenuBarLayout: React.SFC<IMenuBarLayoutProps> = ({
  backgroundColor,
  showSideBar,
  children
}) => {
  return showSideBar ? null : (
    <Layout backgroundColor={backgroundColor}>{children}</Layout>
  );
};

export default MenuBarLayout;
