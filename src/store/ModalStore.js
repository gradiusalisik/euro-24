import { action, observable } from "mobx";

class ModalStore {
  @observable
  isShowModalSuccess = false;

  @observable
  isShowModalDiscount = false;

  @observable
  hideCodeDiscount = false;

  @action
  openModalSuccess = () => {
    this.isShowModalSuccess = true;
  };

  @action
  closeModalSuccess = () => {
    this.isShowModalSuccess = false;
  };

  @action
  openModalDiscount = () => {
    this.isShowModalDiscount = true;
    if (!this.hideCodeDiscount) {
      this.hideCodeDiscount = true;
    }
  };

  @action
  closeModalDiscount = () => {
    this.isShowModalDiscount = false;
  };
}

const modalStore = new ModalStore();

export default modalStore;
export { ModalStore };
