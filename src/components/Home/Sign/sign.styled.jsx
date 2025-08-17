
import styled from 'styled-components';


export const ContainerWelcome = styled.div`

   position: relative;
   min-height: 100vh;
   width:100%;
   display: flex;
   flex-direction: column;
   padding-top: 60px; /* Espace pour la nav fixe */



 `
   
/* Navigation */
export const Nav = styled.nav` 
    top:0;
    right:0;
    left:0;
    position:fixed;
     
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 1000;
    margin-bottom:5px;
    gap: 15px;

    div{
       display: flex;
       gap:3px;
    }
   
    button{
        margin-left: 2px;
        border: none;
        border-radius: 30px;
        box-shadow: rgb(98 129 255 / 22%) 0px 7px 29px 0px;
        background-color: #fff;
        color: #4c40f7 !important;
        font-size: 14px;
        font-family: gbold;
        padding:6px;
    

       &:hover {
        /* color:#ffffff; */
        background-color:#f9f9f9;  
        box-shadow: rgb(98 129 255 / 22%) 0px 8px 24px;
       } 

    }
    /* Responsive pour tablettes */
    @media (max-width: 768px) {
        padding: 12px 15px;
        gap: 10px;

        button {
        padding: 8px 15px;
        font-size: 14px;
        }
    }

    /* Responsive pour mobiles */
    @media (max-width: 480px) {
        flex-direction: column;
        padding: 10px;
        position: static; /* Pour les très petits écrans */
        margin-bottom: 20px;

        button {
        width: 100%;
        margin: 5px 0;
        }
    }
    @media (max-width: 320px) {
        button, input {
            font-size: 12px;
        }
    }

 `
;

/* Message de bienvenue */
export const WelcomeMessage = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  width: 90%;
  max-width: 800px;

  /* Responsive pour tablettes */
  @media (max-width: 768px) {
    font-size: 2rem;
  }

  /* Responsive pour mobiles */
  @media (max-width: 480px) {
    font-size: 1.5rem;
    position: static;
    transform: none;
    margin: 40px auto;
    padding: 20px;
  }

  @media (max-height: 480px) and (orientation: landscape) {
  .WelcomeMessage {
    font-size: 1.2rem;
    margin: 20px auto;
   }
  }
`;


export const ContenairSign = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 120px); /* 100vh moins la hauteur de la nav et marges */
    width: 100%;
    
 `
