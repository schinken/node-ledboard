
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
} 


function Frame(animationBuilder) {
  this.animationBuilder = animationBuilder;
  this.meta = {};
}

Frame.prototype.duration = function(duration) {
  duration = min(duration, 9999);
  this.meta[FIELD.DURATION] = '\x0E2' + pad(duration, 4);
  return this;
};

Frame.prototype.speed = function(speed) {
  this.meta[FIELD.SPEED] = '\x0F' + speed;
  return this;
};

Frame.prototype.align = function(align) {
  this.meta[FIELD.ALIGN] = '\x1E' + align;
  return this;
};

Frame.prototype.patternIn = function(animation) {
  this.meta[FIELD.PATTERN_IN] = '\x0AI' + animation;
  return this;
};

Frame.prototype.patternOut = function(animation) {
  this.meta[FIELD.PATTERN_OUT] = '\x0AO' + animation;
  return this;
};

Frame.prototype.end = function() {
  return this.animationBuilder;
};
