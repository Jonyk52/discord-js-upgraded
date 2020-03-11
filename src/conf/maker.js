var Datastore = require("../Datastore");

module.exports.build.easy = class{
  constructor(owner_id){
    var data = new Datastore({
      home:process.cwd(),
      base:".config/",
      name:"easy-conf"
    })
  }
}