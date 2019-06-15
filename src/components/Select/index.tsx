import styled from 'styled-components'

export default styled.select`
  width: 400px;
  margin: 10px auto;
  padding: 4px 8px;
  border-radius: 2px;
  font-size: 16px;

  option {
    width: inherit;
  }

  @media screen and (max-width: 750px) {
    width: 280px;
  }
`
