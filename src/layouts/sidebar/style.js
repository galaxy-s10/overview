import styled from 'styled-components';

export const SideBarWraper = styled.div`
  height: 100vh;
  border-right: 1px solid #f0f0f0;
  width: 300px;
  overflow: hidden;
  background-color: #ffffff;
  :hover {
    overflow-y: auto;
  }
  .side-bar-title {
    width: 280px;
    height: 60px;
    color: black;
    font-size: 24px;
    line-height: 60px;
    text-align: center;
    .side-bar-logo {
      cursor: pointer;
      width: 60%;
      display: flex;
      margin: 0 auto;
      align-items: center;
      justify-content: space-around;
    }
  }
  > .side-bar-item {
    position: relative;
    /* height: 50px; */
    width: 280px;
    display: inline-block;
    color: #222121;
    padding: 10px;
    /* line-height: 50px; */
    /* text-align: center; */
    transition: all 0.3s ease;
    > .side-bar-item-title {
      display: inline-block;
      width: 100%;
      color: #00000073;
      &:hover {
        cursor: pointer;
      }
    }
    .side-bar-item-list {
      .side-bar-item {
        padding: 10px;
        margin: 14px;
        &:hover {
          cursor: pointer;
          color: #448ef7;
        }
      }
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
