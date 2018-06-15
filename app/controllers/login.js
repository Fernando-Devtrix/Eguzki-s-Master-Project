import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    checkUser(){
      var name = this.get("name");
      var pass = this.get("pass");

      if (name === "fer" && pass === "pass") {
         this.transitionToRoute('list')
      }else {
        window.alert("Error, no eres Eguzki");
      }
    }
  }

});
