import BookModel from '../models/BookModel.js'

export const AddBooksControllers = async (req,resp) => {
    try {
        const { name, author, imageUrl } = req.body;
        const createBook = await BookModel({ name, author, imageUrl })
        const newBook = await createBook.save();
        resp.json({ success: true, message: "New Book Added Successfully", newBook }).status(200)
    } catch (error) {
        resp.json({ success: false, message: "Error in Adding the Book", error }).status(400)
    }
}

export const GetBooksControllers = async (req,resp) => {
    try {
        const getBooks = await BookModel.find()
        resp.json({ success: true, message: "All Books Fetched Successfully", getBooks }).status(200)
    } catch (error) {
        resp.json({ success: false, message: "Error in fetching the Books", error }).status(400)
    }
}

export const UpdateBookControllers = async (req,resp) => {
    try {
        const id = req.params.id;
        const updateBook = await BookModel.findByIdAndUpdate({_id:id},req.body)
        resp.json({ success: true, message: "Book Updated Successfully", updateBook }).status(200)
    } catch (error) {
        resp.json({ success: false, message: "Error in Updating the Book", error }).status(400)
    }
}

export const DeleteBookControllers = async (req,resp) => {
    try {
        const id = req.params.id;
        const deleteBook = await BookModel.findByIdAndDelete({_id:id},req.body)
        resp.json({ success: true, message: "Book Deleted Successfully", deleteBook }).status(200)
    } catch (error) {
        resp.json({ success: false, message: "Error in Deleting the Book", error }).status(400)
    }
}

