"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.postProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const getProducts = (req, res) => {
    res.json({
        msg: 'get products'
    });
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'get product',
        id: id
    });
};
exports.getProduct = getProduct;
const deleteProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'delete product',
        id: id
    });
};
exports.deleteProduct = deleteProduct;
const postProduct = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'post product',
        body
    });
};
exports.postProduct = postProduct;
const updateProduct = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'update product',
        id,
        body
    });
};
exports.updateProduct = updateProduct;
