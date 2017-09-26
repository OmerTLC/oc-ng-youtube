export class ServerApi {
// @ngInject
constructor($http) {
  this.http = $http;
}

getYoutubeData(searchWord){
  //get 20 youtube Data
  console.log(`get 20 ${searchWord} youtube data`);

// example from https://developers.google.com/youtube/v3/docs/search/list#http-request

  // buildApiRequest('GET',
  //                 '/youtube/v3/search',
  //                 {'maxResults': '20',
  //                  'part': 'snippet',
  //                  'q': 'surfing',
  //                  'type': ''});

}



get(url){
  return this.http.get(url);
}
post(url, data) {
  return this.http.post(url, data);
}
put() {

}




}
