const Event = require("../models/event");

const commentsControllers = {
  addComment: async (req, res) => {
    const { event, comment } = req.body.comment;
    const user = req.user._id;
    try {
      const nuevoComment = await Event.findOneAndUpdate(
        { _id: event },
        { $push: { comments: { comment: comment, user: user } } },
        { new: true }
      ).populate("comments.user", { firstName: 1, image: 1 });
      res.json({
        success: true,
        response: { nuevoComment },
        message: "gracias por dejarnos tu comentario",
      });
    } catch (error) {
      res.json({
        success: false,
        message: "Algo a salido mal intentalo en unos minutos",
        console: console.log(error),
      });
    }
  },
  modifiComment: async (req, res) => {
    const { comment } = req.body.data;
    const { id } = req.params;

    const user = req.user._id;

    try {
      const newComment = await Event.findOneAndUpdate(
        { "comments._id": id },
        { $set: { "comments.$.comment": comment } },
        { new: true }
      );
      console.log(newComment);
      res.json({
        success: true,
        response: { newComment },
        message: "tu comentario a sido modificado",
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: true,
        message: "Algo a salido mal intentalo en unos minutos",
        console: console.log(error),
      });
    }
  },
  deleteComment: async (req, res) => {
    const id = req.params.id;
    const user = req.user._id;
    try {
      const deleteComment = await Event.findOneAndUpdate(
        { "comments._id": id },
        { $pull: { comments: { _id: id } } },
        { new: true }
      );
      console.log(deleteComment);
      res.json({
        success: true,
        response: { deleteComment },
        message: "has eliminado el comentario",
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Algo a salido mal intentalo en unos minutos",
      });
    }
  },
};
module.exports = commentsControllers;
