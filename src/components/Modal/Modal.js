import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import {
  ModalStyled,
  Overlay,
  CloseButton,
  CloseIcon,
  Content
} from "./Modal.styled";

const Modal = React.memo(({ isShow, onClose, children }) => {
  const modalTarget = useRef(document.createElement("div"));
  const scrollableContentRef = useRef();

  useEffect(() => {
    document.body.appendChild(modalTarget.current);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      modalTarget.current.remove();
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  useEffect(() => {
    if (isShow) {
      if (scrollableContentRef.current && false) {
        disableBodyScroll(scrollableContentRef.current, {
          allowTouchMove: el => {
            while (el && el !== document.body) {
              if (el.getAttribute("body-scroll-lock-ignore") !== null) {
                return true;
              }

              el = el.parentNode;
            }
            return;
          }
        });
      }
    } else {
      enableBodyScroll(scrollableContentRef.current);
    }

    return () => {
      if (scrollableContentRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        enableBodyScroll(scrollableContentRef.current);
      }
    };
  }, [isShow]);

  const onKeyUp = e => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  const renderModal = () => {
    return (
      <ModalStyled isShow={isShow} ref={scrollableContentRef}>
        <Overlay />
        <Content>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          {children}
        </Content>
      </ModalStyled>
    );
  };

  return ReactDOM.createPortal(renderModal(), modalTarget.current);
});

export default Modal;
