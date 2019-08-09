import styled from "styled-components";
import { colors } from "../../variables";
import SliderReviews from "../SliderReviews/SliderReviews";

import ReviewIllustration from "../../assets/img/reviews/illustration-reviews.svg";

export const ReviewsStyled = styled.div`
  /* TODO временный костыль на высоту */
  height: 540px;
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  position: relative;
  padding-top: 70px;
  margin-right: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 0 0 auto;
  width: 486px;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 380px;
    height: 360px;
    content: "";
    background-image: url(${ReviewIllustration});
    background-repeat: no-repeat;
  }
`;

export const Wrap = styled.div`
  position: relative;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.4;
  color: ${colors.main};
`;

export const SliderReviewsStyled = styled(SliderReviews)`
  width: calc(100% - 566px);
`;