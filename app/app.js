import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'dearann', // TODO: loaded via config
  Resolver: Resolver,
  ready: function () {
    moment.locale('zh-cn');
  }
});

loadInitializers(App, 'dearann');

export default App;
