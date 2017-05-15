var assert = require("assert");
var Task = require("../task.js");

describe("Task", function(){

  it("Task should have attributes",function(){
    var task = new Task("Kill Minotaur", 8, 9, 1000);
    assert.equal("Kill Minotaur", task.name);
    assert.equal(8, task.difficulty);
    assert.equal(9, task.urgency);
    assert.equal(1000, task.reward);
  });

  it("Task can be completed",function(){
    var task = new Task("Kill Minotaur", 8, 9, 1000);
    task.completeTask();
    assert.equal(true, task.completed);
  });
});
