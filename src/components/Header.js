import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { 
    selectUserEmail,
    selectUserPhoto, 
    selectUserDetails,  
    setUserLoginDetails
    } from '../features/user/userSlice';


const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const username = useSelector(selectUserEmail);
    const userphoto = useSelector(selectUserPhoto);
    

    const handleAuth = () => {
        auth.signInWithPopup(provider).then((results) => {
            console.log(results)
            setUser(results.user)
        }).catch(err => console.log(err))
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
        )
    };


    return(
        <Nav>
           <Logo src="/images/logo.svg" />

           {
            !username ? 
            <UserLogin onClick={handleAuth}>Login</UserLogin>
            :
            <>
           <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
           </NavMenu>
           <UserImg src={userphoto} alt={username} />
           </>
           }
          
        </Nav>
    )
}


const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 5px;
    overflow-x: hidden;
    z-index: 3;
`;


const Logo = styled.img`
    width: 100px;
`;

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    height: 100%;
    margin-left: 25px;

    a {
        display: flex; 
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img {
            height: 20px;
            width: 20px;
            min-width: 20px;
        }

        span {
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:before {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0; 
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
                visibility: hidden;
                width: auto;
            }
        }

        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }

    @media (max-width: 768px) {
        display: none;
    }

`;

const UserLogin = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    };
`;


const UserImg = styled.img`
  height: 100%;
  border-radius: 50%;
`;


export default Header;