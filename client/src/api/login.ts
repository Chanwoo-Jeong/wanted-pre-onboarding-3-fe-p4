import { Item, User } from '../types/user'
import { BASE_URL } from './const'

type LoginResult = 'success' | 'fail'

export interface LoginRequest {
  username: string
  password: string
}

export const login = async (args: LoginRequest): Promise<LoginResult> => {
  const loginRes = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include'
    },
    body: JSON.stringify(args)
  })

  return loginRes.ok ? 'success' : 'fail'
}

export const getCurrentUserInfo = async (): Promise<User | null> => {
  const userInfoRes = await fetch(`${ BASE_URL }/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include'
    }
  })

  return userInfoRes.ok ? userInfoRes.json() : null
}

// TODO 4-2: GET, '/items' 호출
export const getItems = async (): Promise<Item[] | null> => {

  const itemRes = await fetch(`${ BASE_URL }/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include'
    }
  })

  
  return  itemRes.ok ? itemRes.json() : null
}

// TODO 4-2: GET, '/all-items' 호출
export const getAllItems = async (): Promise<Item[] | null> => {
  const itemRes = await fetch(`${ BASE_URL }/all-items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include'
    }
  })

 
  return itemRes.ok ? itemRes.json() : null
}


// TODO 4-2: POST, '/logout' 호출
export const logout = async (): Promise<void> => {
  await fetch(`${ BASE_URL }/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include'
    }
  })
}
