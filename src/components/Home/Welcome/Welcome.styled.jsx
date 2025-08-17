import styled from 'styled-components';


export const FormContainer = styled.div`
    width: min(408px, 100vw - 24px);
    min-width: 300px;
    background: #fff;
    border-radius: 12px;
    box-shadow: rgba(98,129,255,0.17) 0px 48px 100px 0px;
    justify-content: center;  
    display: flex;
    flex-direction: column;
    margin-top:45px;
    padding: 24px 35px 16px;
    flex-grow: 1;
    gap: 20px;


    & > input{
      height: 44px;
      padding: 0 10px;
      border-radius : 10px;
      line-height: 28px;
      border-width:1px;


    } 
    & > h2{
      margin:auto;
    }
    
   

    & > button {

      padding: 0 14px;
      font-size: 1.2rem;
      background-color: #98a3ec;
      color:rgb(21 21 21 / 87%) !important;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
      transition: background-color 0.3s ease;
      box-shadow: rgb(98 129 255 / 22%) 0px 7px 29px 0px;
      height: 44px;
      line-height: 25px;
      display: flex;
      justify-content: center;
      align-items: center

    }  
    & > button:hover {
    /* color:#ffffff; */
    background-color:#f9f9f9;  
    box-shadow: rgb(98 129 255 / 22%) 0px 8px 24px;
    } 
    
    /* Responsive pour mobiles */
    @media (max-width: 480px) {
        gap: 15px;

        input, button {
        padding: 10px;
        font-size: 14px;
        }
    }

    /* Responsive pour mobiles */
    @media (max-width: 340px) {
        gap: 15px;
        min-width: auto;
    }
 `

export const MyCustomButton = styled.button`
      padding: 0 14px;
      font-size: 1.2rem;
      background-color: #98a3ec;
      color:rgba(255, 255, 255, 0.87) !important;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
      transition: background-color 0.3s ease;
      box-shadow: rgb(98 129 255 / 22%) 0px 7px 29px 0px;
      height: 44px;
      line-height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction:row;


 `

export const PasswordAndRegistry = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-item: center;
  & > p {
   font-size:13px;
  
  }


 `



export const Separator = styled.div`
        display:flex;
        flex-direction: row;   
        & > div{
          border-bottom: 1px dashed #000; 
          width: 50%;  
          margin: 20px 0;  
           
        }   
  `
 
export const SelectCandidat = styled.div`
    box-shadow: rgba(98,129,255,0.17) 0px 48px 100px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top:45px;
    padding: 2rem;
    gap: 20px;
    & > div > div{
       display: flex;
       flex-direction: row;
       
    } 

 `

 export const BoxSchadow = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* noir transparent */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
   

 `

 export const StartVoteBtn = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #ffffff;
  color: #000;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  transition: background-color 0.3s ease;
  `

 export const ContainAllLeftNew = styled.div`
  /* display: flex;
    flex-direction: column; 
    
    
    margin-bottom: 1rem;
    border: none;
    border-radius: 30px;
    box-shadow: rgb(98 129 255 / 22%) 0px 7px 29px 0px;
    background-color: #fff;
    color: #4c40f7 !important;
    font-size: 16px;
    font-family: gbold;
    padding-right: 80px;
    padding-left:80px
    
    
    
    */

  position: relative;
  min-height: 90vh;
  z-index: 2;
  background-color: #fff;

  & > .left-content {
    position: relative;
    height: 100%;
    width: 100%;
  }
  & .content {
    position: relative;
    height: 100%;
    width: 100%;
    padding-top: 120px;
    padding-right: 120px;
    padding-bottom: 60px;
    padding-left: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  @media (max-width: 2150px) {
    /* width: 800px; */
    & .content {
      padding-right: 100px;
      padding-left: 180px;
    }
  }

  @media (max-width: 1600px) {
    /* width: 650px; */
    & .content {
      padding-right: 5rem;
      padding-left: 140px;
    }
  }

  @media (max-width: 1300px) {
    /* width: 540px; */
    & .content {
      padding-right: 50px;
      padding-left: 5rem;
    }
  }

  @media (max-width: 1050px) {
    /* width: 420px; */

    & .content {
      padding-right: 20px;
      padding-left: 20px;
    }
  }

  @media (max-width: 800px) {
    /* display:none; */
    min-height: 0;
    width: auto;
    & .content {
      padding-left: 0.938rem;
      padding-right: 0.938rem;
    }
  }

  @media (max-width: 600px) {
    min-height: 0;
    width: auto;
    & .content {
      padding-left: 7px;
      padding-right: 7px;
    }
  }
`