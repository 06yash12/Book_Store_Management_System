import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const EditBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setTitle(response.data.title)
        setAuthor(response.data.author)
        setPublishYear(response.data.publishYear)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        alert('An error happened. Please check console')
        console.log(error)
      })
  }, [id])

  const handleEditBook = () => {
    const data = { title, author, publishYear: Number(publishYear) }
    setLoading(true)
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        alert('An error happened. Please check console')
        console.log(error)
      })
  }

  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <BackButton />
      <h1 className='text-3xl font-bold text-center my-6 text-gray-700'>Edit Book</h1>
      {loading && <Spinner />}
      <div className='flex justify-center'>
        <div className='flex flex-col border-2 border-sky-400 bg-white shadow-md rounded-xl w-full max-w-xl p-6'>
          <div className='mb-4'>
            <label className='text-lg font-medium text-gray-600'>Title</label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='mt-1 border border-gray-400 rounded-md px-4 py-2 w-full'
            />
          </div>
          <div className='mb-4'>
            <label className='text-lg font-medium text-gray-600'>Author</label>
            <input
              type='text'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className='mt-1 border border-gray-400 rounded-md px-4 py-2 w-full'
            />
          </div>
          <div className='mb-6'>
            <label className='text-lg font-medium text-gray-600'>Publish Year</label>
            <input
              type='number'
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className='mt-1 border border-gray-400 rounded-md px-4 py-2 w-full'
            />
          </div>
          <button
            onClick={handleEditBook}
            className='bg-sky-400 hover:bg-sky-500 text-white font-semibold py-2 rounded-md'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditBook
