import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../Layouts";
import { Link } from "../../node_modules/react-router-dom/index";
function SubscribeSection() {
  return (
    <SubscribeSectionStyled>
      <InnerLayout>
        <div className="s-con">
          <div className="left">
            <h2 style={{ color: "white" }}>
              Check out the Market place
              <br /> for dances and more.
            </h2>
          </div>
          <div className="right">
            <div className="input-control">
              <Link to="/home">
                <div className="s-btn" style={{ color: "white" }}>
                  Visit Market
                </div>
              </Link>
            </div>
          </div>
        </div>
      </InnerLayout>
    </SubscribeSectionStyled>
  );
}

const SubscribeSectionStyled = styled.section`
  background-color: #26c766;
  .s-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 1234px) {
      grid-template-columns: repeat(1, 1fr);
      .left {
        width: 100%;
        display: inline-block !important;
        padding-bottom: 2rem;
        h2 {
          text-align: center;
        }
      }
    }
    .left {
      display: flex;
      align-items: center;
      h2 {
        font-size: 2.5rem;
        line-height: 4rem;
      }
    }
    .right {
      display: flex;
      align-items: center;
    }
    .input-control {
      position: relative;
      font-weight: 500;
      width: 100%;
      input {
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        padding: 1.4rem 2rem;
        outline: none;
        border: none;
        border-radius: 7px;
      }
      .s-btn {
        position: absolute;
        top: 50%;
        background-color: #272a33;
        right: 0.2rem;
        transform: translateY(-50%);
        padding: 1.1rem 2rem;

        cursor: pointer;
        border-radius: 7px;
        transition: all 0.4s ease-in-out;
        &:hover {
          background-color: #444a59;
        }
      }
    }
  }
`;
export default SubscribeSection;
