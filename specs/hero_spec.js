var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js");
var Food = require("../food.js");
var Rat = require("../rat.js");

describe("Hero", function(){

  it("Hero should have attributes",function(){
    var hero = new Hero("Hercules", 1000, "Cow");
    assert.equal("Hercules", hero.name);
    assert.equal(1000, hero.health);
    assert.equal("Cow", hero.fav_food);
  });

  it("Hero can say name",function(){
    var hero = new Hero("Hercules", 1000, "Cow");
    assert.equal("I am Hercules!", hero.entrance());
  });

  it("Hero can have task",function(){
    var hero = new Hero("Hercules", 1000, "Cow");
    var task = new Task("Kill Minotaur", 8, 9, 1000);
    hero.add(task);
    assert.equal("Kill Minotaur", hero.tasks[0].name);
  });

  it("Hero can eat food",function(){
    var hero = new Hero("Hercules", 1000, "Cow");
    var food = new Food("Horse", 10);
    hero.eat(food);
    assert.equal(1010, hero.health);
  });

  it("Hero can eat favourite food food",function(){
    var hero = new Hero("Hercules", 1000, "Cow");
    var food = new Food("Cow", 20);
    hero.eat(food);
    assert.equal(1030, hero.health);
  });

  it("Hero can rank tasks",function(){
    var hero = new Hero("Hercules", 1000, "Cow");
    var task1 = new Task("Kill Minotaur", 8, 9, 1000);
    var task2 = new Task("Clean Stables", 3, 3, 2000);
    var task3 = new Task("Get Medusa's Head", 9, 4, 5000);
    var task4 = new Task("Lead Argonauts", 10, 2, 3000);
    hero.add(task1);
    hero.add(task2);
    hero.add(task3);
    hero.add(task4);
    var new_array1 = hero.tasksByDifficulty();
    var new_array2 = hero.tasksByUrgency();
    var new_array3 = hero.tasksByReward();
    assert.equal("Lead Argonauts", new_array1[0].name);
    assert.equal("Kill Minotaur", new_array2[0].name);
    assert.equal("Get Medusa's Head", new_array3[0].name);
  });

  it("Hero can see only completed or incomplete",function(){
    var hero = new Hero("Hercules", 1000, "Cow");
    var task1 = new Task("Kill Minotaur", 8, 9, 1000);
    var task2 = new Task("Clean Stables", 3, 3, 2000);
    var task3 = new Task("Get Medusa's Head", 9, 4, 5000);
    var task4 = new Task("Lead Argonauts", 10, 2, 3000);
    hero.add(task1);
    hero.add(task2);
    hero.add(task3);
    hero.add(task4);
    task1.completeTask();
    task3.completeTask();
    var new_array1 = hero.completedTasks();
    var new_array2 = hero.incompleteTasks();
    assert.equal("Kill Minotaur", new_array1[0].name);
    assert.equal("Clean Stables", new_array2[0].name);
  });

  it("Hero can eat poisoned food",function(){
    var hero = new Hero("Hercules", 1000, "Cow");
    var food = new Food("Horse", 10);
    var rat = new Rat();
    rat.touch(food);
    hero.eat(food);
    assert.equal(500, hero.health);
  });
});
