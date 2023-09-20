import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_URL

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getOneById = async (id: number) => {
  const response = await axios.get(`${baseUrl}?search=${id}`)
  return response.data
}

export default { getAll, getOneById }
