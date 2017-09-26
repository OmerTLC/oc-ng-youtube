
const template = require('./side-panel.html');


class SidePanelController {
// @ngInject
  constructor(MyServiceStore, ServiceStorage) {
    this.MyServiceStore = MyServiceStore;
    this.ServiceStorage = ServiceStorage;
    this.youtubeSearch ="";

  }

  $onInit(){
    this.youtubeSearch = this.ServiceStorage.getItem("youtubeSearch")  || [];
  }

  getYoutubeData(youtubeSearch){
    this.MyServiceStore.get20Youtube(youtubeSearch);
  }

}



export const sidePanel = {
  bindings: {},
    controller: SidePanelController,
    controllerAs: 'SidePanel',
    template
};
