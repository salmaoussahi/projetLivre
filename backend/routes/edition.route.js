module.exports = app => {
    const edition = require("../controllers/edition.controller");
  
    var router = require("express").Router();
  
    router.post("/", edition.create);
  
    router.get("/", edition.findAll);
    
    // router.get("/:id", edition.findOne);
  
    // router.put("/:id", edition.update);
  
    // router.delete("/:id", edition.delete);

    // router.delete("/", edition.deleteAll);
  
    app.use('/api/edition', router);
  };