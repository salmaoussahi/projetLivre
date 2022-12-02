module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
      id:{type:Sequelize.INTEGER,autoIncrement:true,primaryKey:true},
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
    });
  
    return Book;
  };
 
  