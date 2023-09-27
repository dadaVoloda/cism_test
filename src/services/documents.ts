import axios from 'axios'

const baseUrl = import.meta.env.VITE_API_URL

const getOneById = async (id: string) => {
  const response = await axios.get(`${baseUrl}?search=${id}`)
  return response.data
}

export default { getOneById }
