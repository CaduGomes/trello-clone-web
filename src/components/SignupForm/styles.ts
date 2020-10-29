import styled from "styled-components";

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  align-items: center;
  height: 550px;
  width: 73%;
  -webkit-box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.57);
  -moz-box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.57);
  box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.57);
  border-radius: 2px;
  margin-top: 30px;
  background-color: #fff;
  @media (max-width: 641px) {
    -webkit-box-shadow: 0px 0px 0px 2px #fff;
    -moz-box-shadow: 0px 0px 0px 0px #fff;
    box-shadow: 0px 0px 0px 0px #fff;
  }
`;

export const Title = styled.p`
  color: #5e6e94;
`;

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const FormInput = styled.input`
  width: 80%;
  margin-top: 20px;
  padding: 8px;
  background-color: #f9fafc;
  border-radius: 3px;
  box-sizing: border-box;
  border: 2px solid #dfe1e6;
  ::hover {
    background-color: #ebecf0;
  }
  ::focus {
    background-color: #fff;
    border-color: #4c9aff;
  }
  ::placeholder {
    color: #7a869a;
  }
`;

export const ServicesTextContainer = styled.div`
  display: flex;
  margin: 20px 20px 20px 20px;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ServicesText = styled.span`
  font-size: 10px;
  color: #7a869a;
`;

export const ServicesBlueText = styled.span`
  color: #0052cc;
  &:hover {
    text-decoration: underline;
  }
`;

export const SignupButton = styled.input`
  padding: 10px;
  background-color: #0047ca;
  width: 80%;
  color: #fff;
  border: 0px;
  border-radius: 3px;
  &:hover {
    background-color: #0065ff;
  }
`;

