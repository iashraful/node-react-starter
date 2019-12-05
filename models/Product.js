import mongoose, { model } from 'mongoose';
const {Schema} = mongoose;

const productSchema = new Schema({
    name: String,
    description: String,
})

export default model('products', productSchema);