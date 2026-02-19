import express from 'express';
import Book from '../models/bookModel.js';

//import { Book } from '../models/bookModel.js';

const router = express.Router();

// Route for Create a new book
router.post('/', async (request, response) => {
    try {
        const { title, author, publishYear } = request.body; // Changed req.body to request.body

        if (!title || !author || !publishYear) {
            return response.status(400).send({ // Changed res.status to response.status and json to send
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const newBook = {
            title: title,
            author: author,
            publishYear: publishYear,
        };

        const book = await Book.create(newBook);
        return response.status(201).send(book); // Changed json(book) to send(book) for consistency with other routes
    } catch (error) {
        console.error('Error creating book:', error.message);
        return response.status(500).send({ message: error.message }); // Changed json to send
    }
});

// Route for Get All Books from database
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});

        return response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Get One Book from database by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const book = await Book.findById(id);

        if (!book) { // Added check if book is found
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Update a Book
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const { id } = request.params;

        const result = await Book.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).send({ message: 'Book updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Delete a book
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router; // Export the router