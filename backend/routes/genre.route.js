module.exports = app => {
    const genre = require("../controllers/genre.controller");
  
    var router = require("express").Router();
  
    router.post("/", genre.create);
  
    router.get("/", genre.findAll);
    
    // router.get("/:id", genre.findOne);
  
    // router.put("/:id", genre.update);
  
    // router.delete("/:id", genre.delete);

    // router.delete("/", genre.deleteAll);
  
    app.use('/api/genre', router);
  };