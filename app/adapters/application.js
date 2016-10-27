import FirebaseAdapter from 'emberfire/adapters/firebase';

export default FirebaseAdapter.extend({
  actions: {
    navToHome() {
      this.transitionTo('index');
    }
  }
});
