import { HeaderContainer, Logo } from "./HeaderStyle"
import logo from '../../data/images/SPACE_DREAM.png'

function Header () {
    return(
        <HeaderContainer>
        <Logo src={logo} alt="logo" />
        </HeaderContainer>
    )
}

export default Header