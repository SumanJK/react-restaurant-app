import React from "react";
import styled from "styled-components";
import "./RestaurantDetails.css";

const HotelName = styled.h3`
  margin: 0;
  color: #040082;
  font-family: "Lexend Deca", sans-serif;
  transition: all 0.6s ease;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.6s ease;
  object-fit: cover;
`;
const OnHover = styled.div`
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 18.4%;
  right: 18.4%;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  color: #fff;
  border-radius: 8px;
  background-color: #0000006b;
  transition: all 0.5s ease;
  opacity: 0;
  text-transform: uppercase;
  font-family: "Lexend Deca", sans-serif;
  letter-spacing: 0.6px;
  cursor: pointer;
  box-shadow: rgb(204, 219, 232) 3px 3px 10px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 10px 0px inset;
`;
const Container = styled.div`
  /* border: 1px solid black; */
  background-color: #fff;
  width: 23%;
  height: 420px;
  padding: 15px 0;
  margin: 0.82rem;
  transition: all 0.3s ease;
  border-radius: 6px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    transition: all 0.3s ease;
  }
  &:hover ${HotelName} {
    color: #fd5234;
    transition: all 0.6s ease;
  }
  &:hover ${Image} {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    transition: all 0.6s ease;
  }
  &:hover ${OnHover} {
    -webkit-transform: scale(1.6);
    transform: scale(1.6);
    transition: all 1s ease;
    opacity: 0.8;
    letter-spacing: 2px;
    word-spacing: 4px;
  }
`;
const HotelDetails = styled.div`
  display: flex;
`;
const HotelInfo = styled.div`
  display: flex;
  height: 120px;
  justify-content: space-between;
  /* border: 2px solid blue; */
  width: 90%;
  margin: 0 auto;
  text-align: left;
`;

const ImageDiv = styled.div`
  width: 90%;
  height: 65%;
  margin: 0 auto;
  transition: all 0.6s ease;
  overflow: hidden;
  position: relative;
`;

const DetailsDiv = styled.div`
  width: 80%;
  padding: 5px 10px;
  position: relative;
`;

const Categories = styled.div``;
const Span = styled.span`
  font-size: 12px;
  color: #686868;
  font-weight: 500;
`;
const Time = styled.div`
  display: flex;
  padding: 4px 0;
  justify-content: flex-start;
  position: absolute;
  top: 1;
  bottom: 0;
`;
const PulseDiv = styled.div`
  height: 20%;
  margin: auto 0;
  width: 22%;
`;
const Pulse = styled.div``;
const Info = styled.p`
  font-size: 14px;
  margin: 0;
`;
const RatingDiv = styled.div`
  text-align: right;
  padding: 2px 0;
  width: 5.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Rating = styled.div`
  width: 60%;
  text-align: center;
  padding: 5px 4px;
  color: white;
  font-family: "Archivo Black", sans-serif;
  box-shadow: rgb(204, 219, 232) 3px 3px 5px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 5px 0px inset;
`;
const OrderDiv = styled.div`
  border-top: 0.5px solid black;
  height: 42px;
  display: flex;
  justify-content: flex-end;
`;
const OrderNow = styled.button`
  border: none;
  border-left: 1px solid lightgreen;
  background-color: #08ff0838;
  height: 42px;
  border-end-end-radius: 6px;
  width: 55%;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #016f01;
  font-weight: 700;
  cursor: pointer;
  padding: 0 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
`;
const RestaurantDetails = ({ val }) => {
  const {
    name,
    id,
    rating,
    cost,
    reviews,
    time,
    img,
    payment_methods,
    categories,
  } = val;
  // console.log(
  //   name,
  //   rating,
  //   cost_for_one,
  //   reviews,
  //   time,
  //   img,
  //   payment_methods,
  //   categories,
  //   "console"
  // );
  return (
    <Container>
      <ImageDiv>
        <Image src={img} alt="hotel_pic" />
        <OnHover>Order Now</OnHover>
      </ImageDiv>
      <HotelDetails>
        <HotelInfo>
          <DetailsDiv>
            <HotelName>{name}</HotelName>
            <Categories>
              <Span> North Indian, chinese</Span>
            </Categories>
            <Span> cost ₹{cost} for one</Span>
            <Time>
              <PulseDiv>
                <Pulse className="pulse"></Pulse>
              </PulseDiv>
              <Info>upto {time} </Info>
            </Time>
          </DetailsDiv>
          <RatingDiv>
            <Rating className={rating >= 3.5 ? "green" : "red"}>
              {rating}
            </Rating>
            <Span>{reviews} reviews</Span>
          </RatingDiv>
        </HotelInfo>
      </HotelDetails>
      <OrderDiv>
        <OrderNow>
          Order Online{" "}
          <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/20/000000/external-arrow-arrows-those-icons-lineal-color-those-icons.png" />
        </OrderNow>
      </OrderDiv>
    </Container>
  );
};

export default RestaurantDetails;
