import { TitleHome, Logo } from './Home.styled';
import phonebook from 'image/clipart489751.png';

export default function Home() {
    return (
        <>
            <TitleHome>Welcome to PhoneBook</TitleHome>
            <Logo><img src={phonebook} alt="Logo" height="300" /></Logo>
        </>
    )
}

