import React from 'react';
import './style.scss';
import 'antd/dist/antd.css';
import { Menu, Row, Tooltip, Drawer } from 'antd';
import { logo } from '../../assets/images';

const menu = (key, label) => <Menu.Item key={key}>{label}</Menu.Item>;
const menuMobile = (key, label) => <Menu.Item key={key}>{label}</Menu.Item>;

class Header extends React.Component {
    state = {
        current: 'hompages',
        visible: false,
    };
    showMenu = () => this.setState({ visible: true });
    closeMenu = () => this.setState({ visible: false });
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };
    render() {
        const { visible, current } = this.state;
        return (
            <div className="header">
                <div className="container">
                    <Row className="menu">
                        <Tooltip className="logo-header" trigger="click" title="Image logo">
                            <img src={logo} alt="logo" />
                            <div className="txt-logo">Fitness Center</div>
                        </Tooltip>

                        <div className="menu-item" id="menu">
                            <Drawer
                                title="Basic Drawer"
                                placement="right"
                                closable={false}
                                // onClose={onClose}
                                visible={visible}
                            >
                                <Menu
                                    onClick={this.handleClick}
                                    selectedKeys={[current]}
                                    mode="horizontal"
                                >
                                    {menu('homepages', 'HOMPAGE')}
                                    {menu('pages', 'PAGES')}
                                    {menu('classes', 'CLASSES')}
                                    {menu('news', 'NEWS')}
                                    {menu('contact', 'CONTACTS')}
                                </Menu>
                            </Drawer>
                        </div>
                        <div className="menuMobile">
                            <button className="btnMenu" onClick={this.showMenu}>
                                <ion-icon name="menu-outline"></ion-icon>
                            </button>
                            <Menu
                                title="Menu"
                                placement="right"
                                closable={false}
                                onClose={this.closeMenu}
                                visible={this.state.visible}
                            >
                                {menuMobile('homepages', 'HOMPAGE')}
                                {menuMobile('pages', 'PAGES')}
                                {menuMobile('classes', 'CLASSES')}
                                {menuMobile('news', 'NEWS')}
                                {menuMobile('contact', 'CONTACTS')}
                            </Menu>
                        </div>
                    </Row>
                </div>
            </div>
        );
    }
}
Header.propTypes = {};
export default Header;
