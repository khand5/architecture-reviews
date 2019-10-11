import { syncHistoryWithStore, RouterStore } from "mobx-react-router";

import { createHashHistory } from "history";

export class RootStore {
  constructor() {
    this.routerStore = new RouterStore();
    this.history = syncHistoryWithStore(createHashHistory(), this.routerStore);
  }
}

export default new RootStore();
