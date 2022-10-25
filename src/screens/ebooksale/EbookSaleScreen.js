import 'aos/dist/aos.css';
import React from 'react';
import AOS from 'aos';
import CapaLivro from '../../assets/images/capaLivro.png';
import borderSectionOne from '../../assets/images/border-section-one.svg'
import { Button, Container, Navbar } from 'react-bootstrap';
import { buttonSectionFour, buttonSectionOne, ContainerNavBar, ContainerSectionOne, ContainerSectionThree, DivAllCardsSectionFour, DivAllCardsSectionThree, DivBorderBottom, DivCardSectionFour, DivCardSectionThree, DivContentHeader, DivItems, DivSectionFour, DivSectionThree, DivSectionTwo, iconCardStyle, iconList, NavStyle, PAreYouReady, PFullPrice, PInstallmentPrice, PInstallmentText, PItensList, PSubTitleCardSectionFour, PSubTitleSectionOne, PTitleCardSectionFour, PTitleSectionFour, PTitleSectionOne, PTitleSectionTwo, SectionOne, SubTitleCardSectionThree, TitleCardSectionThree, TitleSectionThree } from './styles';
import { TbBrandCss3, TbBrandJavascript, TbBrandHtml5 } from 'react-icons/tb';
import { BsCheckAll, BsGraphUp } from 'react-icons/bs';
import { SlGraduation } from 'react-icons/sl';
import { RiSecurePaymentLine } from 'react-icons/ri';

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
                {/* <SectionOne>
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
                </SectionOne> */}
                <SectionOne>
                    <ContainerSectionOne>
                        <DivContentHeader>
                            <div data-aos="fade-right" data-aos-duration="2000">
                                <PTitleSectionOne>O melhor E-book passo a passo</PTitleSectionOne>
                                <PSubTitleSectionOne>Comece a desenvolver seu primeiro site hoje mesmo!</PSubTitleSectionOne>
                                <Button className='btn' style={buttonSectionOne}>Garantir meu E-book</Button>
                            </div>
                            <div className='cellphoneImgSectionOne'>
                                {/* grid-template-columns: repeat(auto-fit, minmax(186px, 1fr)); */}
                                <img className='imgSectionOne' src={CapaLivro} alt="logo" width={600} />
                            </div>
                        </DivContentHeader>
                    </ContainerSectionOne>
                    <img src={borderSectionOne} className="borderSectionOne" alt="border" />
                </SectionOne>
                <DivSectionTwo>
                    <Container>
                        <PTitleSectionTwo>Para quem é este E-book</PTitleSectionTwo>
                        <p>Para todas as pessoas que desejam iniciar uma carreira como desenvolvedor. Você aprenderá a criar seu primeiro site de forma simples, sem enrolação. Iremos te ajudar a alavancar a sua carreira Front-end.
                            Já pensou que em menos de um ano, você estará pronto para construir um aplicativo do zero?
                            Com nosso curso, você terá uma visão ampla de todo projeto para criação de uma aplicação e poderá definir o seu caminho profissional, apto para atuar no Front-end, Back-end e Mobile em uma das maiores empresas do Brasil e do mundo.
                            Com a Fullture você pode chegar mais longe!
                        </p>
                    </Container>
                </DivSectionTwo>
                <DivSectionThree>
                    <ContainerSectionThree>
                        <TitleSectionThree>Um E-book completo para você</TitleSectionThree>
                        <DivAllCardsSectionThree>
                            <DivCardSectionThree>
                                <TbBrandHtml5 style={iconCardStyle} />
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
                                <BsGraphUp style={iconCardStyle} />
                                <TitleCardSectionThree>Aprenda do zero</TitleCardSectionThree>
                                <SubTitleCardSectionThree>No Front-end, o início você começa do zero. Aprenda a desenvolver desde sites simples até aplicativos mais avançados</SubTitleCardSectionThree>
                            </DivCardSectionThree>

                            <DivCardSectionThree>
                                <RiSecurePaymentLine style={iconCardStyle} />
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
                                <DivBorderBottom className='border-bottom'>
                                    <PTitleCardSectionFour>E-book + Mentoria</PTitleCardSectionFour>
                                    <PSubTitleCardSectionFour>O famoso "tudo em um".</PSubTitleCardSectionFour>
                                </DivBorderBottom>
                                <DivBorderBottom>
                                    <PInstallmentText>Em até 4x de </PInstallmentText>
                                    <PInstallmentPrice>R$ 14,97</PInstallmentPrice>
                                    <PFullPrice>Ou R$ 59,90 à vista</PFullPrice>
                                    <Button style={buttonSectionFour}>Comprar agora</Button>
                                </DivBorderBottom>
                                <DivItems>
                                    <PItensList><BsCheckAll style={iconList} />Mentoria exclusiva</PItensList>
                                    <PItensList><BsCheckAll style={iconList} />Discord privado</PItensList>
                                    <PItensList><BsCheckAll style={iconList} />Telegram privado</PItensList>
                                    <PItensList><BsCheckAll style={iconList} />E-book</PItensList>
                                    <PItensList><BsCheckAll style={iconList} />Acesso à novidades</PItensList>
                                </DivItems>
                            </DivCardSectionFour>

                            <DivCardSectionFour>
                                <DivBorderBottom>
                                    <PTitleCardSectionFour>E-book</PTitleCardSectionFour>
                                    <PSubTitleCardSectionFour>Acesso ao e-book</PSubTitleCardSectionFour>
                                </DivBorderBottom>
                                <DivBorderBottom>
                                    <PInstallmentText>Em até 3x de </PInstallmentText>
                                    <PInstallmentPrice>R$ 13,30</PInstallmentPrice>
                                    <PFullPrice>ou R$ 39,90 à vista</PFullPrice>
                                    <Button style={buttonSectionFour}>Comprar agora</Button>
                                </DivBorderBottom>
                                <DivItems>
                                    <PItensList><BsCheckAll style={iconList} />Discord privado</PItensList>
                                    <PItensList><BsCheckAll style={iconList} />Telegram privado</PItensList>
                                    <PItensList><BsCheckAll style={iconList} />E-book</PItensList>
                                </DivItems>
                            </DivCardSectionFour>
                        </DivAllCardsSectionFour>
                    </ContainerSectionThree>
                </DivSectionFour>
            </>
        );
    }
}