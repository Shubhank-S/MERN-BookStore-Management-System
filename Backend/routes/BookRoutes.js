import express from 'express'
import { AddBooksControllers, DeleteBookControllers, GetBooksControllers, UpdateBookControllers } from '../controllers/BookControllers.js';

const router = express.Router()

// POST || Add a Book

router.post('/add-books',AddBooksControllers)

// GET || Get All Books

router.get('/get-books',GetBooksControllers)

// PUT || Update a Book

router.put('/update-book/:id',UpdateBookControllers)

// DELETE || Delete a Book

router.delete('/delete-book/:id',DeleteBookControllers)

export default router;