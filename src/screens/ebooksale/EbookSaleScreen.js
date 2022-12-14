import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import React from 'react';
import AOS from 'aos';
import CapaLivro from '../../assets/images/capaLivro.png';
import borderSectionOne from '../../assets/images/border-section-one.svg'
import { Button, Container, Form, Navbar } from 'react-bootstrap';
import { ButtonForm, buttonSectionFour, buttonSectionOne, ContainerNavBar, ContainerSectionOne, ContainerSectionSix, ContainerSectionThree, DivAllCardsSectionFour, DivAllCardsSectionThree, DivBorderBottom, DivCardSectionFour, DivCardSectionThree, DivContentHeader, DivFilterSectionSix, DivItems, DivSectionFive, DivSectionFour, DivSectionSix, DivSectionThree, DivSectionTwo, Footer, iconCardStyle, iconList, MySwiper, NavStyle, PAreYouReady, PFullPrice, PInstallmentPrice, PInstallmentText, PItensList, PMsgForm, PSubTitleCardSectionFour, PSubtitleForm, PSubTitleSectionOne, PSubtitleSectionSix, PTextFooter, PTextSectionFive, PTitleCardSectionFour, PTitleForm, PTitleSectionFour, PTitleSectionOne, PTitleSectionSix, PTitleSectionTwo, SectionOne, StarsSectionFive, SubTitleCardSectionThree, TitleCardSectionThree, TitleSectionThree } from './styles';
import { TbBrandCss3, TbBrandJavascript, TbBrandHtml5 } from 'react-icons/tb';
import { BsCheckAll, BsGraphUp } from 'react-icons/bs';
import { SlGraduation } from 'react-icons/sl';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

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
                        <PTitleSectionTwo>Para quem ?? este E-book</PTitleSectionTwo>
                        <p>Para todas as pessoas que desejam iniciar uma carreira como desenvolvedor. Voc?? aprender?? a criar seu primeiro site de forma simples, sem enrola????o. Iremos te ajudar a alavancar a sua carreira Front-end.
                            J?? pensou que em menos de um ano, voc?? estar?? pronto para construir um aplicativo do zero?
                            Com nosso curso, voc?? ter?? uma vis??o ampla de todo projeto para cria????o de uma aplica????o e poder?? definir o seu caminho profissional, apto para atuar no Front-end, Back-end e Mobile em uma das maiores empresas do Brasil e do mundo.
                            Com a Fullture voc?? pode chegar mais longe!
                        </p>
                    </Container>
                </DivSectionTwo>
                <DivSectionThree>
                    <ContainerSectionThree>
                        <TitleSectionThree>Um E-book completo para voc??</TitleSectionThree>
                        <DivAllCardsSectionThree>
                            <DivCardSectionThree>
                                <TbBrandHtml5 style={iconCardStyle} />
                                <TitleCardSectionThree>Aprenda HTML</TitleCardSectionThree>
                                <SubTitleCardSectionThree>N??o acreditamos em teoria sem pr??tica. Aqui voc?? aprende fazendo! J?? pensou criar seu pr??prio site?</SubTitleCardSectionThree>
                            </DivCardSectionThree>

                            <DivCardSectionThree>
                                <TbBrandCss3 style={iconCardStyle} />
                                <TitleCardSectionThree>Aprenda CSS</TitleCardSectionThree>
                                <SubTitleCardSectionThree>N??o acreditamos em teoria sem pr??tica. Aqui voc?? aprende fazendo! J?? pensou criar seu pr??prio site?</SubTitleCardSectionThree>
                            </DivCardSectionThree>

                            <DivCardSectionThree>
                                <TbBrandJavascript style={iconCardStyle} />
                                <TitleCardSectionThree>Aprenda JavaScript</TitleCardSectionThree>
                                <SubTitleCardSectionThree>N??o acreditamos em teoria sem pr??tica. Aqui voc?? aprende fazendo! J?? pensou criar seu pr??prio site?</SubTitleCardSectionThree>
                            </DivCardSectionThree>

                            <DivCardSectionThree>
                                <SlGraduation style={iconCardStyle} />
                                <TitleCardSectionThree>E-book 100% pr??tico</TitleCardSectionThree>
                                <SubTitleCardSectionThree>N??o acreditamos em teoria sem pr??tica. Aqui voc?? aprende fazendo! J?? pensou criar seu pr??prio site?</SubTitleCardSectionThree>
                            </DivCardSectionThree>

                            <DivCardSectionThree>
                                <BsGraphUp style={iconCardStyle} />
                                <TitleCardSectionThree>Aprenda do zero</TitleCardSectionThree>
                                <SubTitleCardSectionThree>No Front-end, o in??cio voc?? come??a do zero. Aprenda a desenvolver desde sites simples at?? aplicativos mais avan??ados</SubTitleCardSectionThree>
                            </DivCardSectionThree>

                            <DivCardSectionThree>
                                <RiSecurePaymentLine style={iconCardStyle} />
                                <TitleCardSectionThree>Risco zero</TitleCardSectionThree>
                                <SubTitleCardSectionThree>Se voc?? iniciar o curso e identificar que ele n??o ?? pra voc??, n??o se preocupe. Dentro de sete dias n??s devolvemos 100% do seu dinheiro</SubTitleCardSectionThree>
                            </DivCardSectionThree>
                        </DivAllCardsSectionThree>
                    </ContainerSectionThree>
                </DivSectionThree>
                <DivSectionFour>
                    <ContainerSectionThree>
                        <PAreYouReady>Voc?? est?? pronto?</PAreYouReady>
                        <PTitleSectionFour>Meus planos</PTitleSectionFour>
                        <DivAllCardsSectionFour>
                            <DivCardSectionFour className='main'>
                                <DivBorderBottom className='border-bottom'>
                                    <PTitleCardSectionFour>E-book + Mentoria</PTitleCardSectionFour>
                                    <PSubTitleCardSectionFour>O famoso "tudo em um".</PSubTitleCardSectionFour>
                                </DivBorderBottom>
                                <DivBorderBottom>
                                    <PInstallmentText>Em at?? 4x de </PInstallmentText>
                                    <PInstallmentPrice>R$ 14,97</PInstallmentPrice>
                                    <PFullPrice>Ou R$ 59,90 ?? vista</PFullPrice>
                                    <Button style={buttonSectionFour}>Comprar agora</Button>
                                </DivBorderBottom>
                                <DivItems>
                                    <PItensList><BsCheckAll style={iconList} />Mentoria exclusiva</PItensList>
                                    <PItensList><BsCheckAll style={iconList} />Discord privado</PItensList>
                                    <PItensList><BsCheckAll style={iconList} />Telegram privado</PItensList>
                                    <PItensList><BsCheckAll style={iconList} />E-book</PItensList>
                                    <PItensList><BsCheckAll style={iconList} />Acesso ?? novidades</PItensList>
                                </DivItems>
                            </DivCardSectionFour>

                            <DivCardSectionFour>
                                <DivBorderBottom>
                                    <PTitleCardSectionFour>E-book</PTitleCardSectionFour>
                                    <PSubTitleCardSectionFour>Acesso ao e-book</PSubTitleCardSectionFour>
                                </DivBorderBottom>
                                <DivBorderBottom>
                                    <PInstallmentText>Em at?? 3x de </PInstallmentText>
                                    <PInstallmentPrice>R$ 13,30</PInstallmentPrice>
                                    <PFullPrice>ou R$ 39,90 ?? vista</PFullPrice>
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
                <DivSectionFive>
                    <MySwiper>
                        <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={30}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='d-block'>
                                    <div className='d-flex mb-4'>
                                        <StarsSectionFive /><StarsSectionFive /><StarsSectionFive /><StarsSectionFive /><StarsSectionFive />
                                    </div>
                                    <PTextSectionFive>"Mano mto obg pelo conte??do, tenho apenas 13 anos, mas quero come??ar a aprender a programar. E esse ser?? meu primeiro projeto de muitos. Mto obg"</PTextSectionFive>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='d-block'>
                                    <div className='d-flex mb-4'>
                                        <StarsSectionFive /><StarsSectionFive /><StarsSectionFive /><StarsSectionFive /><StarsSectionFive />
                                    </div>
                                    <PTextSectionFive>"Simples e pr??tico, muito bom!"</PTextSectionFive>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='d-block'>
                                    <div className='d-flex mb-4'>
                                        <StarsSectionFive /><StarsSectionFive /><StarsSectionFive /><StarsSectionFive /><StarsSectionFive />
                                    </div>
                                    <PTextSectionFive>"Parab??ns amigo! Muito boa sua did??tica."</PTextSectionFive>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='d-block'>
                                    <div className='d-flex mb-4'>
                                        <StarsSectionFive /><StarsSectionFive /><StarsSectionFive /><StarsSectionFive /><StarsSectionFive />
                                    </div>
                                    <PTextSectionFive>"Marivilha, ensina passo a passo, professor incrivel. Parabens"</PTextSectionFive>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='d-block'>
                                    <div className='d-flex mb-4'>
                                        <StarsSectionFive /><StarsSectionFive /><StarsSectionFive /><StarsSectionFive /><StarsSectionFive />
                                    </div>
                                    <PTextSectionFive>"Massa, Daniel! Obrigado pelo conte??do! Me ajudou bastante!"</PTextSectionFive>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='d-block'>
                                    <div className='d-flex mb-4'>
                                        <StarsSectionFive /><StarsSectionFive /><StarsSectionFive /><StarsSectionFive /><StarsSectionFive />
                                    </div>
                                    <PTextSectionFive>"Conte??do t?? top, pae. Continua"</PTextSectionFive>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='d-block'>
                                    <div className='d-flex mb-4'>
                                        <StarsSectionFive /><StarsSectionFive /><StarsSectionFive /><StarsSectionFive /><StarsSectionFive />
                                    </div>
                                    <PTextSectionFive>"Simplesmente incr??vel!!! Aprendi algo, que eu achava absurdo, em poucas horas. Seu trabalho ?? incr??vel"</PTextSectionFive>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='d-block'>
                                    <div className='d-flex mb-4'>
                                        <StarsSectionFive /><StarsSectionFive /><StarsSectionFive /><StarsSectionFive /><StarsSectionFive />
                                    </div>
                                    <PTextSectionFive>"Top! Muito f??cil de aprender!!!"</PTextSectionFive>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </MySwiper>
                </DivSectionFive>
                <DivSectionSix>
                    <DivFilterSectionSix>
                        <ContainerSectionSix>
                            <div>
                                <PTitleSectionSix>
                                    Chegou a hora
                                    de voc?? mudar sua
                                    vida profissional!
                                </PTitleSectionSix>
                                <PSubtitleSectionSix>
                                    Aprenda os primeiros passos
                                    para voc?? criar sites do zero
                                </PSubtitleSectionSix>
                            </div>
                            <div>
                                <PTitleForm>D?? O PRIMEIRO PASSO AGORA!</PTitleForm>
                                <PSubtitleForm>Preencha para receber mais informa????es</PSubtitleForm>
                                <Form>
                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Nome*</Form.Label>
                                        <Form.Control type="text" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" required />
                                    </Form.Group>
                                    <ButtonForm variant="primary" type="submit">
                                        QUERO SABER MAIS
                                    </ButtonForm>
                                    <PMsgForm>*Prometemos n??o utilizar suas informa????es de contato para enviar qualquer tipo de SPAM.</PMsgForm>
                                </Form>
                            </div>
                        </ContainerSectionSix>
                    </DivFilterSectionSix>
                </DivSectionSix>
                <Footer>
                    <Container className='p-4 text-center'>
                        <PTextFooter>Daniel Moraes - Tech Daniel's</PTextFooter>
                    </Container>
                </Footer>
            </>
        );
    }
}