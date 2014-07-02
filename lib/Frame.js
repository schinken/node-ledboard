var Commands = require('./Commands');

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
} 


function Frame(animationBuilder) {
  this.animationBuilder = animationBuilder;
  
  this.duration = 20;
  this.speed = Commands.SPEED.MEDIUM;

  this.alignHorizontal = Commands.ALIGN.HORIZONTAL_CENTER;
  this.alignVertical = Commands.ALIGN.VERTICAL.CENTER;

  this.patternIn = Commands.PATTERN.MOVE_LEFT;
  this.patternOut = Commands.PATTERN.MOVE_LEFT;
}

Frame.prototype.duration = function(duration, ms = false) {
  
  if(ms) {
	duration = parseFloat(duration) / 1000.0;
  }

  this.duration = min(9999, max(0.0001, duration));
  return this;
};

Frame.prototype.speed = function(speed) {
  this.speed = speed;
  return this;
};

Frame.prototype.alignHorizontal = function(align) {
  this.alignHorizontal = align;
  return this;
};

Frame.prototype.alignVertical = function(align) {
  this.alignVertical = align;
  return this;
};

Frame.prototype.patternIn = function(pattern) {
  this.patternIn = pattern;
  return this;
};

Frame.prototype.patternOut = function(pattern) {
  this.patternOut = pattern;
  return this;
};

Frame.prototype.get = function() {
  
  var frame = [];

};

