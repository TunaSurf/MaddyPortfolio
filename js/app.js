var feed = new Instafeed({
  get: 'user',
  // userId: '6032269889',
  userId: '1197657145',
  limit: '8',
  resolution: 'standard_resolution',
  template: '<a href="{{link}}"><img src="{{image}}" /><div class="darken"></div><div class="details"><p>{{caption}}</p><p><3 {{likes}}</p></div></a>',
  accessToken: '1197657145.1677ed0.1f5e72ddc15344e58ff56e80ce5db066',
  clientId: '	f8535b333f304470bc8ad7bf16a4545b'
});

feed.run();