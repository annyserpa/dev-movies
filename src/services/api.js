import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '1604b651e834f2fe642f35c2d4176cfc',
    language: 'pt-BR',
    page: 1
  }
})

export default api
