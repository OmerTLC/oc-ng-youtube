const template = require('./oc-content.html');
const OCstyle = require('./oc-content.css');
import {autorun} from 'ng-mobx';


class OcContentController {
// @ngInject
  constructor($scope, MyServiceStore) {
    autorun($scope,
    ()=>{
        this.youtubes = MyServiceStore.youtubes;
        this.youtubeQuery = MyServiceStore.youtubeQuery;        
    })
  }

  $onInit(){
  }
}

export const ocContent = {
  bindings: {},
    controller: OcContentController,
    controllerAs: 'OcContent',
    template
};
