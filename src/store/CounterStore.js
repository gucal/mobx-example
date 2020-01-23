import { observable, action, autorun, reaction, when } from 'mobx';

class CounterStore {
  @observable count = 1;

  constructor() {
    /*  autorun(() => {
        alert(this.count);
      })*/

    /* reaction(
       () => this.count,
       count => {
         if (count === 5) {
           alert('Başardın');
         }
       }
     )*/

    when(
      () => this.count === 5,
      () => alert("Başardın")
    )
  }

  @action arttir = () => {
    this.count++;
  }

  @action azalt = () => {
    this.count--;
  }

}

export default new CounterStore();