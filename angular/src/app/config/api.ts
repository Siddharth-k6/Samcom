import { environment } from 'src/environments/environment'

export const baseUrl = environment.production ? 'http://localhost:3000' : 'http://localhost:3000'
export const loginUrl = baseUrl + '/login'
export const productsUrl = baseUrl + '/products'


