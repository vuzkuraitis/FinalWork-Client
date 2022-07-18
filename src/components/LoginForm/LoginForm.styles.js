import styled from "styled-components";

export const LoginForm = styled.div`
  .formSection {
    margin: 0 auto;
    padding: 1rem;
  }
  .formSection > p {
    display: flex;
    align-items: center;
    color: #ffffff;
    font-size: 0.75rem;
  }
  .loginLink,
  .forgotPassLink {
    color: #646fd4;
    cursor: pointer;
    font-size: 1rem;
    text-decoration: none;
    margin-left: 1rem;
  }
  .loginLink:hover {
    color: #ecb365;
  }
  .forgotPassLink:hover {
    color: #ecb365;
  }
`;
