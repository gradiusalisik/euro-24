import React from "react";
import { inject } from "mobx-react";
import { useForm } from "../../utils/customHooks";

import Modal from "../Modal/Modal";

import {
  ModalReviewStyled,
  Image,
  Title,
  Header,
  Form,
  TextareaStyled,
  FieldStyled,
  ButtonSubmit
} from "./ModalReview.styled";

const ModalReview = ({ closeModalReview, isShowModalReview }) => {
  const handleClose = () => {
    closeModalReview();
  };

  const formInfo = () => {
    console.log(
      `User Created!, Name: ${inputs.name}, Phone: ${inputs.reviews}`
    );
  };

  const { inputs, handleInputChange, handleSubmit } = useForm({}, formInfo);

  return (
    <Modal isShow={isShowModalReview} onClose={handleClose}>
      <ModalReviewStyled>
        <Header>
          <Image />
          <Title>Оставить отзыв</Title>
        </Header>
        <Form onSubmit={handleSubmit}>
          <FieldStyled
            name="name"
            type="text"
            value={inputs.name}
            placeholder="Как к вам обращаться?"
            error
            onChange={handleInputChange}
          />
          <TextareaStyled
            name="reviews"
            value={inputs.reviews}
            placeholder="Ваш отзыв"
          />
          <FieldStyled
            name="video"
            type="text"
            value={inputs.video}
            placeholder="Ссылка на видео-отзыв (необязательно)"
          />
          <ButtonSubmit type="submit" size="full">
            Оставить отзыв
          </ButtonSubmit>
        </Form>
      </ModalReviewStyled>
    </Modal>
  );
};

export default inject(({ modalStore }) => ({
  closeModalReview: modalStore.closeModalReview,
  isShowModalReview: modalStore.isShowModalReview
}))(ModalReview);