import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 90%;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #555;
    }
    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }

  @media only screen and (max-width: 430px) and (min-width: 331px) {
    max-width: 90%;
    header {
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
      div {
        margin-left: 18px;

        strong {
          font-size: 24px;
          color: #3d3d4d;
        }

        p {
          font-size: 16px;
          color: #737380;
          margin-top: 4px;
        }
      }
    }

    ul {
      margin: 80px auto;
      text-align: center;
      max-width: 90%;
      li {
        strong {
          display: block;
          font-size: 24px;
          color: #3d3d4d;
        }
        span {
          display: block;
          margin-top: 4px;
          color: #6c6c80;
        }
      }
    }
  }

  @media only screen and (max-width: 375px) {
    header {
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
      div {
        margin-left: 14px;

        strong {
          font-size: 18px;
          color: #3d3d4d;
        }

        p {
          font-size: 14px;
          color: #737380;
          margin-top: 4px;
        }
      }
    }

    ul {
      margin-top: 60px;
      justify-content: space-between;
      text-align: center;
      li {
        & + li {
          margin-left: 40px;
        }
        strong {
          display: block;
          font-size: 18px;
          color: #3d3d4d;
        }
        span {
          display: block;
          margin-top: 4px;
          color: #6c6c80;
        }
      }
    }
  }
`;

export const Issues = styled.section`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    color: #3a3a3a;

    display: flex;
    align-items: center;

    transition: transform 0.2s;
    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }
  }

  div {
    margin: 0 16px;
    flex: 1;
    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
  @media only screen and (max-width: 430px) {
    max-width: 90%;
    div {
      margin: 0 16px;
      flex: 1;
      p {
        margin-top: 12px;
      }
    }
  }
  @media only screen and (max-width: 375px) {
    margin-top: 60px;
    a {
      padding: 24px 12px;
    }
    div {
      margin: 0 12px;
      strong {
        font-size: 16px;
      }
      p {
        font-size: 14px;
        margin-top: 4px;
      }
    }
  }
`;
