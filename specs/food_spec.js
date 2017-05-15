var assert = require("assert");
var Food = require("../food.js");

describe("Food", function(){

  it("Food should have attributes",function(){
    var food = new Food("Cow", 50);
    assert.equal("Cow", food.name);
    assert.equal(50, food.replenishmentValue);
  });
});
