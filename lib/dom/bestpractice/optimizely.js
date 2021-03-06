(function(util) {
  'use strict';
  var score = 100;
  var scripts = util.getSynchJSFiles(document.head);
  var advice = '';
  var offending = [];
    scripts.forEach(function(script) {
      if (util.getHostname(script) === 'cdn.optimizely.com') {
        offending.push(script);
        score = 0;
        advice = 'The page is using Optimizely. Use it with care because it hurts your performance. Only turn it on (= load the javascript) when you run your A/B tests. Then when you are finished make sure to turn it off.';
      }
    });

  return {
    id: 'optimizely',
    title: 'Only use optimizely when you need it',
    description: 'Use Optimizely with care because it hurts your performance. Only turn it on (= load the javascript) when you run your A/B tests',
    advice: advice,
    score: score,
    weight: 2,
    offending: offending,
    tags: ['bestpractice']
  };
})(util);
