import { AxiosResponse } from 'axios'

interface Users {
  name: string
  age: number
}

export interface GetUsers {
  (): Promise<AxiosResponse<Users>>
}
