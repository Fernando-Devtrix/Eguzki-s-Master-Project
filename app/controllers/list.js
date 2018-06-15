import Controller from '@ember/controller';

export default Controller.extend({
 tasks: [{
    taskNumber: 1,
    taskDescription: "Learn Ember"
  },{
    taskNumber: 2,
    taskDescription: "Learn Ember2"
  },{
    taskNumber: 3,
    taskDescription: "Learn Ember3"
  }],
  actions:{
    addTask(newtask){
      var tasks = this.get("tasks");
      tasks.pushObject({
        taskNumber: newtask,
        taskDescription: newtask
      });
      this.set('newtask', '')
    }
  }
});
