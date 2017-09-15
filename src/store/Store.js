import {extendObservable, observable, computed} from "mobx";

class CragStore {

  constructor() {
    extendObservable(this, {
      climbName: [],
      testRoutes: [
        "Crack-of-Dawn", "El Cap", "DBC_V3"
      ],

      filter: "",
      filteredRoutes: computed(() => {
        let matchesFilter = new RegExp(this.filter, 'i');
        return this.climbName.filter((route) => {
          return !this.filter || matchesFilter.test(route);
        });
      })
    });
  }

  @observable routeData = []
  @observable climbs = []
  @observable notes = []
  @observable badges = []
  @observable files = []

}

const store = new CragStore();

export default store;
