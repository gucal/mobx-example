import { observable, action, configure, computed } from 'mobx'

// ACTION kullanımını zorunlu hale getirir
configure({
  enforceActions: "observed"
});

class PersonStore {
  @observable ad = "None";
  @observable soyad = "None";

  @action changeName() {
    this.ad = "Alirıza";
    this.soyad = "Gücal"
  }

  @computed get fullName() {
    return `${this.ad} ${this.soyad}`
  }
}

export default new PersonStore;