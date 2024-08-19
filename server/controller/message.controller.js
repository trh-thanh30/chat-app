const Conversation = require("../models/conversation.models");
const Message = require("../models/message.models");

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user.id;
    console.log(senderId, receiverId);
    let coversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!coversation) {
      coversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      coversation.message.push(newMessage._id);
    }

    await Promise.all([coversation.save(), newMessage.save()]);
    res.status(200).json(newMessage);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const getMessage = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};
module.exports = { sendMessage, getMessage };
