import { action, observable } from "mobx";

class ModalStore {
  @observable
  isShowModalSuccess = false;

  @action
  openModalSuccess() {
    console.log("work");
    this.isShowModalSuccess = false;
  }

  @action
  closeModalSuccess() {
    this.isShowModalSuccess = false;
  }
}

const modalStore = new ModalStore();

export default modalStore;
export { ModalStore };
