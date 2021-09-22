import styled from 'styled-components';

export const SideBarWraper = styled.div`
  height: 100vh;
  width: 200px;
  background-color: #535a6c;
  .side-bar-title {
    height: 60px;
    color: white;
    font-size: 24px;
    line-height: 60px;
    text-align: center;
  }
  .side-bar-item {
    position: relative;
    /* height: 50px; */
    padding: 14px 24px;
    color: rgba(255, 255, 255, 0.7);
    /* line-height: 50px; */
    /* text-align: center; */
    cursor: pointer;

    &:hover {
      color: white;
    }
    .downIcon {
      position: absolute;
      right: 24px;
      transform: rotate(0deg);
      transition: all 0.3s ease;

      &.isOpen {
        transform: rotate(180deg);
      }
    }
  }
`;
