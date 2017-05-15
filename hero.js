var Hero = function(name, health, fav_food){
  this.name = name;
  this.health = health;
  this.fav_food = fav_food;
  this.tasks = [];

}

Hero.prototype ={
  add: function(task){
    this.tasks.push(task);
  },

  showTasks: function(){
    return this.tasks;
  },

  entrance: function(){
    return "I am " + this.name + "!";
  },

  eat: function(food){
    if (!food.poisoned){
      if (food.name === this.fav_food){
        var value = food.replenishmentValue*1.5;
        this.health = this.health + value;
      }else{
        this.health = this.health + food.replenishmentValue;
      }
    }else{
      this.health = this.health/2;
    }
  },

  tasksByDifficulty: function(){
    var test =  this.tasks.sort(function(a, b) {
      return b.difficulty - a.difficulty;
    });
    return test.slice();
  },

  tasksByUrgency: function(){
    var d =  this.tasks.sort(function(a, b) {
      return b.urgency - a.urgency;
    });
    return d.slice();
  },

  tasksByReward: function(){
    var p =  this.tasks.sort(function(a, b) {
      return b.reward - a.reward;
    });
    return p.slice();
  },

  completedTasks: function(){
    new_array = [];
    for (task of this.tasks){
      if (task.completed){
        new_array.push(task);
      };
    };
    return new_array;
  },

  incompleteTasks: function(){
    new_array = [];
    for (task of this.tasks){
      if (!task.completed){
        new_array.push(task);
      };
    };
    return new_array;
  }
}

module.exports = Hero;
