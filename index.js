module.exports = init

function init(callback) {
  callback(null, 'log', Log)
}

function Log(automait, logger) {
  this.automait = automait
  this.logger = logger
}

Log.prototype.log = function (message, callback) {
  this.logger.info(message)
  callback()
}
