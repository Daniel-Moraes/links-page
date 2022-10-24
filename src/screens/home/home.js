import React from 'react';
import Logo from '../../assets/images/logo.jpg';
import PurpleShaddow from '../../assets/images/shaddow.svg';
import { Avatar, CardDiv, CenterScreen, BorderAvatar, DivIconDescription, iconDiscStyle, iconInstaStyle, iconTeleStyle, iconYTStyle, MainDiv, PDescription, PTitle, shareStyle, DivAvatar, CardMainDiv, iconEbook } from './styles';
import { BsShare } from 'react-icons/bs';
import { FaDiscord, FaTelegramPlane } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { GiBlackBook } from 'react-icons/gi';
import { Container } from 'react-bootstrap';

export default class Home extends React.Component {
    redirectLink = (link) => {
        window.open(link, "_blank");
    }

    render() {
        return (
            <MainDiv>
                <Container>
                    <DivAvatar>
                        <BorderAvatar>
                            <Avatar src={Logo} />
                        </BorderAvatar>
                    </DivAvatar>
                    <PTitle>Tech Daniel's</PTitle>
                    <CenterScreen>
                        <CardMainDiv onClick={() => window.location.href = '/ebooksale'}>
                            <DivIconDescription>
                                <GiBlackBook style={iconEbook} />
                                <PDescription>E-book + Mentoria - Front-end, o início</PDescription>
                            </DivIconDescription>
                            <BsShare style={shareStyle} />
                        </CardMainDiv>
                        <CardDiv onClick={() => this.redirectLink('https://www.youtube.com/c/TechDaniels')}>
                            <DivIconDescription>
                                <FiYoutube style={iconYTStyle} />
                                <PDescription>Canal de programação no Youtube</PDescription>
                            </DivIconDescription>
                            <BsShare style={shareStyle} />
                        </CardDiv>
                        <CardDiv onClick={() => this.redirectLink('https://www.instagram.com/techdaniels.dev/')}>
                            <DivIconDescription>
                                {/* <BsInstagram style={iconInstaStyle} /> */}
                                <i className="fa fa-instagram" id="insta" aria-hidden="true" style={iconInstaStyle}></i>
                                <PDescription>Conteúdo de programação no Instagram</PDescription>
                            </DivIconDescription>
                            <BsShare style={shareStyle} />
                        </CardDiv>
                        <CardDiv>
                            <DivIconDescription>
                                <FaDiscord style={iconDiscStyle} />
                                <PDescription>Nossa comunidade no Discord</PDescription>
                            </DivIconDescription>
                            <BsShare style={shareStyle} />
                        </CardDiv>
                        <CardDiv>
                            <DivIconDescription>
                                <FaTelegramPlane style={iconTeleStyle} />
                                <PDescription>Nossa comunidade no Telegram</PDescription>
                            </DivIconDescription>
                            <BsShare style={shareStyle} />
                        </CardDiv>
                    </CenterScreen>
                </Container>
                <div className='text-center'>
                    <img src={PurpleShaddow} alt="shaddow" width={'50%'}></img>
                </div>
            </MainDiv>
        );
    }
}