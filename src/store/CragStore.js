import {extendObservable, computed} from "mobx";

class CragStore {
  constructor() {
    extendObservable(this, {
      routes: [
        "Crack-of-Dawn", "El Cap", "DBC_V3"
      ],
      filter: "",
      filteredRoutes: computed(() => {
        let matchesFilter = new RegExp(this.filter, 'i');
        return this.routes.filter((route) => {
          return !this.filter || matchesFilter.test(route);
        });
      })
    });
  }
}

const store = window.store = new CragStore();

export default store;
