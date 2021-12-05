import styled from 'styled-components';

const LayoutWraper = styled.div`
  /* position: relative; */
  display: flex;
  .layout-right {
    height: 100vh;
    overflow-y: scroll;
    padding: 0 20px;
    position: relative;
    flex: 1;
  }
`;

export default LayoutWraper;
