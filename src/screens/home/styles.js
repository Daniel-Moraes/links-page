import styled from "styled-components";
import Colors from "../../constants/Colors";

export const CenterScreen = styled.div`    
    text-align: center;
    text-align: -webkit-center;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    width: 100%;
`;

export const BorderAvatar = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    padding: 6px;
`;

export const DivAvatar = styled.div`
    text-align: center;
    text-align: -webkit-center;
    margin-top: 40px;
`;

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    min-height: 100vh;
    background: ${Colors.backgroundColor};

    .container {
        text-align: center;
    }
`;

export const PTitle = styled.p`
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin: 10px 0px 50px 0px;
`;

export const CardDiv = styled.div`
    cursor: pointer;
    width: 100%;
    max-width: 700px;
    background-color: white;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    :hover {
        -webkit-box-shadow: 0px 0px 6px 1px rgba(157,0,255,1);
        -moz-box-shadow: 0px 0px 6px 1px rgba(157,0,255,1);
        box-shadow: 0px 0px 6px 1px rgba(157,0,255,1);
        transition: transform 150ms;
        transform: scale(1.01); 
    }
`;

export const CardMainDiv = styled.div`
    cursor: pointer;
    width: 100%;
    max-width: 700px;
    background-color: ${Colors.primaryColor};
    color: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    :hover {
        -webkit-box-shadow: 0px 0px 6px 1px rgba(157,0,255,1);
        -moz-box-shadow: 0px 0px 6px 1px rgba(157,0,255,1);
        box-shadow: 0px 0px 6px 1px rgba(157,0,255,1);
        transition: transform 150ms;
        transform: scale(1.01); 
    }
`;

export const PDescription = styled.p`
    font-size: 15px;
    margin: 0 15px;
    font-weight: 600;
`;

export const shareStyle = {
    cursor: 'pointer',
    fontSize: '20px',
}

export const DivIconDescription = styled.div`
    display: flex;
    align-items: center;
`;

export const iconYTStyle = {
    fontSize: '35px',
    color: 'red',
}

export const iconEbook = {
    fontSize: '35px',
}

export const iconInstaStyle = {
    fontSize: '35px',
    background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
    WebkitBackgroundClip: 'text',
    /* Also define standard property for compatibility */
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
}

export const iconDiscStyle = {
    fontSize: '35px',
    color: '#5865f2',
}

export const iconTeleStyle = {
    fontSize: '35px',
    color: '#0088cc',
}

export const DivLink = styled.div`
    max-width: 700px;

    a {
        text-decoration: none;
    }
`;