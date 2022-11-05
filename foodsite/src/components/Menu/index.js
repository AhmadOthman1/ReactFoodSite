import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Style from './style.module.css';
import Button from 'react-bootstrap/Button'
function Menu({
  logo,
  Items,
  DropdownItems,
  avatars
}
) {
  return (
    <Navbar className={Style.navBar} expand="md">
      <Container className={Style.navContainer}>
        <Navbar.Brand className={Style.navBarBrand} href="#home"><img className={Style.logo} src={logo} /></Navbar.Brand>
        <Navbar.Toggle className={Style.navButton} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto">
          {Items?.map(Item => {
              return <Nav.Link  href={Item.link} className={Style.navItem}>{Item.title.toUpperCase()}</Nav.Link>
            })}
            {
              DropdownItems?.map(item=> <>
                <NavDropdown className={Style.dropdown}  title={item.title.toUpperCase()} id="basic-nav-dropdown" >
                  {item.subItems?.map(subItem=><>
                    <NavDropdown.Item href={subItem.subLink}>{subItem.subTitle}</NavDropdown.Item>
                  </>)}
            </NavDropdown>
            <Button className={Style.navButton} variant="warning">Restaurant Search</Button>
              </>)
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;



/*import React from 'react'
import MenuItem from '../MenuItem';
import AvatarButton from '../AvatarButton';
import './style.css'


const Menu = (
    {
        logo,
        Items,
        avatars
    }
) => {
  return (
    <div className='navBar'>
      <div className='navLeft'>
        <a href='#'><img className='logo' src={logo?logo : "Logo"}/></a>
        <div className='navItems'>
          {Items?.map(title => {
              return <MenuItem title={title.toUpperCase()}/>
            })}
        </div>
      </div>
      <div className='navAvatars'>
      <MenuItem title="Login"/>
      {avatars?.map(avatar => {
            return <AvatarButton avatar={avatar}/>
          })}
      </div>
    </div>
  )
}

export default Menu;*/