import 'aos/dist/aos.css';
import React from 'react';
import AOS from 'aos';
import CapaLivro from '../../assets/images/capaLivro.png';
import borderSectionOne from '../../assets/images/border-section-one.svg'
import { Button, Container, Navbar } from 'react-bootstrap';
import { buttonSectionFour, buttonSectionOne, ContainerNavBar, ContainerSectionOne, ContainerSectionThree, DivAllCardsSectionFour, DivAllCardsSectionThree, DivBorderBottom, DivCardSectionFour, DivCardSectionThree, DivContentHeader, DivSectionFour, DivSectionThree, DivSectionTwo, iconCardStyle, iconList, NavStyle, PAreYouReady, PFullPrice, PInstallmentPrice, PItensList, PSubTitleCardSectionFour, PSubTitleSectionOne, PTitleCardSectionFour, PTitleSectionFour, PTitleSectionOne, PTitleSectionTwo, SectionOne, SubTitleCardSectionThree, TitleCardSectionThree, TitleSectionThree } from './styles';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { TbBrandCss3, TbBrandJavascript } from 'react-icons/tb';
import { BsCheckAll } from 'react-icons/bs';
import { SlGraduation } from 'react-icons/sl';

export default class EbookSaleScreen extends React.Component {
    componentDidMount() {
        AOS.init();
    }


    render() {
        return (
            <>
                <ContainerNavBar>
                    <NavStyle>
                        <Navbar>
                            <Navbar.Brand href="#">Navbar</Navbar.Brand>
                        </Navbar>
                    </NavStyle>
                </ContainerNavBar>
                <SectionOne>
                    <ContainerSectionOne>
                        <DivContentHeader>
                            <div data-aos="fade-right" data-aos-duration="2000">
                                <PTitleSectionOne>O melhor E-book passo a passo</PTitleSectionOne>
                                <PSubTitleSectionOne>Comece a desenvolver seu primeiro site hoje mesmo!</PSubTitleSectionOne>
                                <Button className='btn' style={buttonSectionOne}>Garantir meu E-book</Button>
                            </div>
                            <div>
                                <img src={CapaLivro} alt="logo" width={600} />
                            </div>
                        </DivContentHeader>
                    </ContainerSectionOne>
                    <img src={borderSectionOne} className="borderSectionOne" alt="border" />
                </SectionOne>
                <DivSectionTwo>
                    <Container>
                        <PTitleSectionTwo>Para quem é este E-book</PTitleSectionTwo>
                        <p>Para todas as pessoas que desejam iniciar uma carreira como desenvolvedor. Você aprenderá a criar seu primeiro site de forma simples, sem enrolação. Iremos te ajudar a alavancar a sua carreira Front-end.</p>
                    </Container>
                </DivSectionTwo>
                <DivSectionThree>
                    <ContainerSectionThree>
                        <TitleSectionThree>Um E-book completo para você</TitleSectionThree>
                        <DivAllCardsSectionThree>
                            <DivCardSectionThree>
                                <AiOutlineHtml5 style={iconCardStyle} />
                                <TitleCardSectionThree>Aprenda HTML</TitleCardSectionThree>
                                <SubTitleCardSectionThree>Não acreditamos em teoria sem prática. Aqui você aprende fazendo! Já pensou criar seu próprio site?</SubTitleCardSectionThree>
                            </DivCardSectionThree>

                            <DivCardSectionThree>
                                <TbBrandCss3 style={iconCardStyle} />
                                <TitleCardSectionThree>Aprenda CSS</TitleCardSectionThree>
                                <SubTitleCardSectionThree>Não acreditamos em teoria sem prática. Aqui você aprende fazendo! Já pensou criar seu próprio site?</SubTitleCardSectionThree>
                            </DivCardSectionThree>

                            <DivCardSectionThree>
                                <TbBrandJavascript style={iconCardStyle} />
                                <TitleCardSectionThree>Aprenda JavaScript</TitleCardSectionThree>
                                <SubTitleCardSectionThree>Não acreditamos em teoria sem prática. Aqui você aprende fazendo! Já pensou criar seu próprio site?</SubTitleCardSectionThree>
                            </DivCardSectionThree>

                            <DivCardSectionThree>
                                <SlGraduation style={iconCardStyle} />
                                <TitleCardSectionThree>E-book 100% prático</TitleCardSectionThree>
                                <SubTitleCardSectionThree>Não acreditamos em teoria sem prática. Aqui você aprende fazendo! Já pensou criar seu próprio site?</SubTitleCardSectionThree>
                            </DivCardSectionThree>

                            <DivCardSectionThree>
                                <TbBrandJavascript style={iconCardStyle} />
                                <TitleCardSectionThree>Aprenda do zero</TitleCardSectionThree>
                                <SubTitleCardSectionThree>No Front-end, o início você começa do zero. Aprenda a desenvolver desde sites simples até aplicativos mais avançados</SubTitleCardSectionThree>
                            </DivCardSectionThree>

                            <DivCardSectionThree>
                                <TbBrandJavascript style={iconCardStyle} />
                                <TitleCardSectionThree>Risco zero</TitleCardSectionThree>
                                <SubTitleCardSectionThree>Se você iniciar o curso e identificar que ele não é pra você, não se preocupe. Dentro de sete dias nós devolvemos 100% do seu dinheiro</SubTitleCardSectionThree>
                            </DivCardSectionThree>
                        </DivAllCardsSectionThree>
                    </ContainerSectionThree>
                </DivSectionThree>
                <DivSectionFour>
                    <ContainerSectionThree>
                        <PAreYouReady>Você está pronto?</PAreYouReady>
                        <PTitleSectionFour>Meus planos</PTitleSectionFour>
                        <DivAllCardsSectionFour>
                            <DivCardSectionFour className='main'>
                                <div className='border-bottom'>
                                    <PTitleCardSectionFour>E-book + Mentoria</PTitleCardSectionFour>
                                    <PSubTitleCardSectionFour>O famoso "tudo em um".</PSubTitleCardSectionFour>
                                </div>
                                <DivBorderBottom>
                                    <PInstallmentPrice>4x de <span>R$ 14,97</span></PInstallmentPrice>
                                    <PFullPrice>Ou R$ 59,90 à vista</PFullPrice>
                                    <Button style={buttonSectionFour}>Comprar agora</Button>
                                </DivBorderBottom>
                                <div>
                                    <PItensList><BsCheckAll style={iconList} />Mentoria exclusiva</PItensList>
                                    <PItensList><BsCheckAll style={iconList} />Discord privado</PItensList>
                                    <PItensList><BsCheckAll style={iconList} />Telegram privado</PItensList>
                                    <PItensList><BsCheckAll style={iconList} />E-book</PItensList>
                                    <PItensList><BsCheckAll style={iconList} />Acesso à novidades</PItensList>
                                </div>
                            </DivCardSectionFour>

                            <DivCardSectionFour>
                                <div className='border-bottom'>
                                    <PTitleCardSectionFour>E-book</PTitleCardSectionFour>
                                    <PSubTitleCardSectionFour>Acesso ao e-book</PSubTitleCardSectionFour>
                                </div>
                                <DivBorderBottom>
                                    <PInstallmentPrice>3x de <span>R$ 13,30</span></PInstallmentPrice>
                                    <PFullPrice>ou R$ 39,90 à vista</PFullPrice>
                                    <Button style={buttonSectionFour}>Comprar agora</Button>
                                </DivBorderBottom>
                                <div>
                                    <PItensList><BsCheckAll style={iconList} />Discord privado</PItensList>
                                    <PItensList><BsCheckAll style={iconList} />Telegram privado</PItensList>
                                    <PItensList><BsCheckAll style={iconList} />E-book</PItensList>
                                </div>
                            </DivCardSectionFour>
                        </DivAllCardsSectionFour>
                    </ContainerSectionThree>
                </DivSectionFour>
            </>
        );
    }
}