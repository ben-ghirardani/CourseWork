var assert = require("assert");
var Athlete = require("../athlete");
var WaterBottle = require("../water_bottle");

describe( "Athlete", function() {

  beforeEach(function() {
    waterBottle = new WaterBottle();
    athlete = new Athlete(waterBottle);
    waterBottle.fill();
  })

  it("athlete hydration should start at 100", function() {
    assert.strictEqual(athlete.hydration, 100);
  })

  it("distance covered should start at 0", function() {
    assert.strictEqual(athlete.distanceCovered, 0);
  })

  it("running decreases hydration and increases distance", function(){
    athlete.run();
    assert.strictEqual(athlete.hydration, 90);
    assert.strictEqual(athlete.distanceCovered, 10);
  })

  it("hydration at 0 means athlete cannot move", function(){
    athlete.hydration = 0;
    athlete.run();
    assert.strictEqual(athlete.hydration, 0);
  })

  it("athlete can drink from water bottle", function(){
    athlete.hydration = 0;
    athlete.drink();
    assert.strictEqual(athlete.hydration, 10);
    assert.strictEqual(athlete.bottle.volume, 90);
  })

});