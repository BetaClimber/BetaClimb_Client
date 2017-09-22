import {extendObservable, computed} from "mobx";

class CragStore {

  constructor() {
    extendObservable(this, {
      climbName: [],
      routeData: [],
      climbs: [],
      notes: [],
      badges: [],
      files: [],
      climbAdded: false,
      showContent: false,
      testRoutes: [
        "Crack-of-Dawn", "El Cap", "DBC_V3"
      ],
      filter: "",
      filteredRoutes: computed(() => {
        let matchesFilter = new RegExp(this.filter, 'i');
        return this.climbName.filter((route) => {
          return !this.filter || matchesFilter.test(route);
        });
      }),

      onShow: computed(() => {
        (this.showContent === false) ?
        setTimeout(() => {
          return this.showContent = true;
        }, 4000) : 'Loaded';
      })
    });
  }
}

const store = new CragStore();

export default store;
