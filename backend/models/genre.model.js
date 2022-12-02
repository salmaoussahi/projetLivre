module.exports = (sequelize, Sequelize) => {
    const Genre = sequelize.define("genre", {
      id:{type:Sequelize.INTEGER,autoIncrement:true,primaryKey:true},
      title: {
        type: Sequelize.STRING
      },
      
    });
  
    return Genre;
  };
 
  