import styled from 'styled-components';

export const PageWrapper = styled.div`
  margin-top: 60px;

  h1 {
    font-size: 1.5em;
    color: palevioletred;
    &:hover {
      text-decoration: underline;
    }
  }
  h2 {
    font-size: 1.5 em;
    color:green;
    margin-left: -700px;
  }
 
`

export const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "yellow" : "yellow"}; 

    font-size: 3em;
    margin: 1em;
    padding: ;
    border: 2px solid palevioletred;
    border-radius: 3px;
`