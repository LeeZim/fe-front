import axios from '@/utils/axios'
import * as API from './declarations'

export const getUsers: API.GetUsers = () => {
  return axios.get('/api/users')
}

export default {}
