const db = require("../models/db.model");
const Genre = db.genres;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const genre = {
    title: req.body.title,
  };

  Genre.create(genre)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "erreur"
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Genre.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error i"
      });
    });
};

// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Book.findByPk(id)
//     .then(data => {
//       if (data) {
//         res.send(data);
//       } else {
//         res.status(404).send({
//           message: `Error`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error"
//       });
//     });
// };

// exports.update = (req, res) => {
//   const id = req.params.id;

//   Book.update(req.body, {
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Success."
//         });
//       } else {
//         res.send({
//           message: `Error`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error"
//       });
//     });
// };

// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Book.destroy({
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Success"
//         });
//       } else {
//         res.send({
//           message: `Error`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error"
//       });
//     });
// };

// exports.deleteAll = (req, res) => {
//   Book.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} Success` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Error"
//       });
//     });
// };

