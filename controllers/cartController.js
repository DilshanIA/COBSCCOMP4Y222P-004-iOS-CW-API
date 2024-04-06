const CartItem = require('../models/cartModel');

async function create(req, res) {
  console.log(req.body);
  try {
    const cartItem = await CartItem.create(req.body);
    res.status(201).json(cartItem);
  } catch (error) {
    console.log(error);
    return { status: 'Failed', error: error.message };
  }
}

async function get(req, res) {
  try {
    const cartitems = await CartItem.find({});
    res.status(201).json(cartitems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getUserCartItems(req, res) {
  try {
    const cartitems = await CartItem.find({ userID: req.params.id });
    res.status(201).json(cartitems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getbyid(req, res) {
  const id = req.params.id;
  try {
    const cartItem = await CartItem.findById(id);
    if (!cartItem) {
      return res.status(404).json({ message: 'Cart Item not found' });
    }
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function remove(req, res) {
  const id = req.params.id;
  try {
    const cartitem = await CartItem.findByIdAndDelete(id);
    if (!cartitem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }
    res.status(200).json({ message: 'Cart item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function update(req, res) {
  const id = req.params.id;
  const updatedCartItemData = req.body;
  try {
    const cart = await CartItem.findByIdAndUpdate(id, updatedCartItemData, {
      new: true,
    });
    if (!cart) {
      return res.status(404).json({ message: 'Cart Item not found' });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  get: get,
  getbyid: getbyid,
  getUserCartItems: getUserCartItems,
  create: create,
  remove: remove,
  update: update,
};
