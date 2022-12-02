module.exports = (sequelize, Sequelize) => {
    const Edition = sequelize.define("edition", {
      id:{type:Sequelize.INTEGER,autoIncrement:true,primaryKey:true},
      title: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      
    });
  
    return Edition;
  };
 
  