import React, { useStores } from "react";
import { observer } from "mobx-react";
import Modal from "../Modal/Modal";
import { Operator as OperatorIcon } from "../Icons/Operator";

import {
  ModalSuccessStyled,
  Image,
  Title,
  Description,
  ButtonBack
} from "./ModalSuccess.styled";

const ModalSuccess = observer(() => {
  const { modalStore } = useStores();

  const handleClose = () => {
    modalStore.openModalSuccess();
  };

  return (
    <Modal isShow onClose={handleClose}>
      <ModalSuccessStyled>
        <Image src={OperatorIcon} />
        <Title>Успех!</Title>
        <Description>Наш мастер уже набирает вас</Description>
        <ButtonBack>Вернуться на главную</ButtonBack>
      </ModalSuccessStyled>
    </Modal>
  );
});

export default ModalSuccess;
