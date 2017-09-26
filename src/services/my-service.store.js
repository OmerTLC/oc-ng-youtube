
import{observable, action} from 'mobx';
export/*@ngInject*/ function myServiceStoreFactory(ServerApi) {
class MyService {

@observable youtubes;

constructor(){
  this.ServerApi = ServerApi;
}

@action

get20Youtube(query) {
this.youtubeQuery =query;
  return this.ServerApi.getYoutubeData(query)

  // return this.ServerApi.get(`https://aalibaabaa-twitter-api.herokuapp.com/api/twitter/search/${query}`)
//  .then((response)=>{
  //  console.log(response);
      // this.youtubes = response.data.statuses;

  //  })
  }


}
return new MyService();
}
