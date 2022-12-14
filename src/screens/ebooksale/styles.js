import { Button, Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import Colors from "../../constants/Colors";
import imgBackgroundBook from '../../assets/images/imgBackgroundBook.png';

export const DivContentHeader = styled.div`
    display: grid;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 5rem;
    grid-row-gap: 4rem;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
    color: white;

    @media screen and (max-width: 991px) {
        min-height: auto;
        grid-auto-flow: row;
        grid-row-gap: 4rem;
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;

        .cellphoneImgSectionOne {
            -ms-grid-column-align: start;
            justify-self: start; 
            text-align: center;
            -webkit-box-ordinal-group: -9998;
            -webkit-order: -9999;
            -ms-flex-order: -9999;
            order: -9999;
        }

        .imgSectionOne {
            max-width: 80%;
            vertical-align: middle;
        }
    }

    @media screen and (max-width: 767px) {
        grid-row-gap: 3rem;
    }
`;

export const NavStyle = styled.div`
    .navbar {
        padding: 8px 16px;
        margin: 16px 24px;
        width: calc(100% - 48px);
        position: absolute;
        left: 0px;
        z-index: 3;
        opacity: 1;
        background: rgba(255, 255, 255, 0.8);
        color: rgb(52, 71, 103);
        border-radius: 0.75rem;
        box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;
        backdrop-filter: saturate(200%) blur(30px);
    }
`;

export const DivSectionTwo = styled.div`
    text-align: center;
    display: block;
    padding: 40px 0px;
`;

export const ContainerNavBar = styled(Container)`
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;
    padding-left: 16px;
    padding-right: 16px;
    position: sticky;
    top: 0px;
    z-index: 10;
`;

export const SectionOne = styled.section`
    background-color: ${Colors.backgroundColor};
    height: 80vh;
    position: relative;

    .borderSectionOne {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
`;

export const ContainerSectionOne = styled(Container)`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`;

export const PTitleSectionOne = styled.p`
    font-size: 33px;
    font-weight: 600;

    @media screen and (max-width: 992px) {
        font-size: 1.4rem;
    }
`;

export const PSubTitleSectionOne = styled.p`
    font-size: 25px;    

    @media screen and (max-width: 992px) {
        font-size: 1.1rem;
    }
`;

export const buttonSectionOne = {
    background: 'linear-gradient(90deg, rgba(158,0,255,1) 0%, rgba(135,29,255,1) 63%, rgba(98,0,255,1) 100%)',
    border: 'none',
    fontSize: '20px',
    marginTop: '100px',
}

export const DivSectionThree = styled.div`
    text-align: center;
    display: block;
    padding: 60px 0px;
    background-color: #ededed;
`;

export const DivCardSectionThree = styled.div`
    padding: 20px;
    margin: 5px;
    border-radius: 10px;
    width: 300px;
    height: 350px;
    text-align: left;
    color: #4e4e4e;

    svg {
        color: ${Colors.primaryColor};
    }

    :hover {
        transition: background-color .7s;
        background-color: ${Colors.primaryColor};
        color: white !important;

        svg {
            color: white;
        }
    }
`;

export const TitleCardSectionThree = styled.p`
    font-size: 25px;
    margin-top: 30px;
    font-weight: 600;
`;

export const SubTitleCardSectionThree = styled.p`
    font-size: 20px;
`;

export const iconCardStyle = {
    fontSize: '50px',
}

export const TitleSectionThree = styled.p`
    font-size: 40px;
    margin-bottom: 80px;
`;

export const DivAllCardsSectionThree = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 950px;
    justify-content: space-evenly;
`;

export const ContainerSectionThree = styled(Container)`
    text-align: -webkit-center;
`;

export const PTitleSectionTwo = styled.p`
    font-size: 40px;
    color: ${Colors.primaryColor};
`;

export const DivSectionFour = styled.div`
    text-align: center;
    display: block;
    background-color: ${Colors.backgroundColor};
    color: white;
    padding: 60px 0px;
`;

export const PTitleSectionFour = styled.p`
    font-size: 40px;
    margin-bottom: 40px;
`;

export const DivAllCardsSectionFour = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 950px;

    .main {
        border: 1px solid ${Colors.primaryColor};
    }
`;

export const DivCardSectionFour = styled.div`
    padding: 25px 20px;
    margin: 10px;
    border-radius: 10px;
    width: 300px;
    /* height: 350px; */
    text-align: left;
    color: #fff;
    background-color: #292929;


    /* svg {
        color: ${Colors.primaryColor};
    } */

    /* :hover {
        transition: background-color .7s;
        background-color: ${Colors.primaryColor};
        color: white !important;

        svg {
            color: white;
        }
    } */
`;

export const PTitleCardSectionFour = styled.p`
    font-size: 25px;
    font-weight: 600;
    margin: 0px;
`;

export const PSubTitleCardSectionFour = styled.p`
    font-size: 20px;
`;

export const PInstallmentPrice = styled.p`
    font-size: 43px;
    font-weight: 600;
    color: ${Colors.primaryColor};
    margin: 0px;
`;

export const PInstallmentText = styled.p`
    font-size: 20px;
    margin: 10px 0px 0px;
`;

export const PFullPrice = styled.p`
    font-size: 16px;
    margin: 0px;
`;

export const iconList = {
    fontSize: '30px',
    marginRight: '5px',
    color: Colors.primaryColor,
}

export const PItensList = styled.p`
    font-size: 15px;
    margin: 0px;
`;

export const PAreYouReady = styled.p`
    font-size: 15px;
    color: ${Colors.primaryColor};
    margin: 0px;
`;

export const buttonSectionFour = {
    background: 'linear-gradient(90deg, rgba(158,0,255,1) 0%, rgba(135,29,255,1) 63%, rgba(98,0,255,1) 100%)',
    border: 'none',
    fontSize: '20px',
    margin: '20px 0px',
}

export const DivBorderBottom = styled.div`
    border-bottom: var(--bs-border-width) var(--bs-border-style) #000!important;
`;

export const DivItems = styled.div`
    margin-top: 15px;
`;

export const MySwiper = styled.div`
    .swiper {
        width: 70%;
        height: 17rem;
    }

    .swiper-slide {
        padding: 16px;
        border: 1px solid ${Colors.primaryColor};
        border-radius: 10px;
        text-align: center;
        font-size: 18px;
        background: #fff;

  /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        width: 18rem;
        height: 85%;
    }

    .swiper-button-next, .swiper-button-prev {
        color: ${Colors.primaryColor} !important;
    }

    .swiper-pagination-bullet-active {
        background: ${Colors.primaryColor};
    }
`;

export const PTextSectionFive = styled.p`
    text-align: justify;
`;

export const StarsSectionFive = styled(FaStar)`
    color: ${Colors.primaryColor};
`;

export const DivSectionFive = styled.div`
    text-align: center;
    display: block;
    padding: 60px 0px;
    background-color: #ededed;
`;

export const DivSectionSix = styled.div`
    background-image: url(${imgBackgroundBook});

    min-height: 600px; 

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const ContainerSectionSix = styled(Container)`
    display: grid;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 5rem;
    grid-row-gap: 4rem;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
    color: white;


    @media screen and (max-width: 991px) {
        min-height: auto;
        grid-auto-flow: row;
        grid-row-gap: 4rem;
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
    }
`;

export const DivFilterSectionSix = styled.div`
    backdrop-filter: brightness(0.4); 
    padding: 40px 0px; 
    min-height: 600px;
    display: flex;
`;

export const PTitleForm = styled.p`
    font-size: 30px;
    font-weight: 600;
    margin: 0;
`;

export const PSubtitleForm = styled.p`
    font-size: 20px;
    margin-bottom: 1.5rem;
`;

export const ButtonForm = styled(Button)`
    margin-top: 1.5rem;
    background-color: ${Colors.primaryColor};
    border: 1px solid ${Colors.primaryColor};

    :active {
        background-color: rgb(98, 0, 255) !important;
        border: 1px solid rgb(98, 0, 255) !important;
    }

    :hover {
        background-color: rgb(98, 0, 255);
        border: 1px solid rgb(98, 0, 255);
    }

    :focus {
        background-color: rgb(98, 0, 255);
        border: 1px solid rgb(98, 0, 255);
    }

    :focus-visible {
        background-color: rgb(98, 0, 255);
        border: 1px solid rgb(98, 0, 255);
        box-shadow: 0 0 0 0.25rem rgba(98, 0, 255, .5);
    }
`;

export const PMsgForm = styled.p`
    font-size: 15px;
    margin: 0.7rem 0px 0px;
`;

export const Footer = styled.div`
    background-color: ${Colors.backgroundColor};
`;

export const PTextFooter = styled.p`
    color: #fff;
    margin: 0;
`;

export const PTitleSectionSix = styled.p`
    font-size: 40px;
    font-weight: 600;
`;

export const PSubtitleSectionSix = styled.p`
    font-size: 25px;
`;