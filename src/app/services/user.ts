export interface User {
  id:3,
  name:string,
  lastname: string,
  email: string,
  password?: string,
  role: number,
  category: number,
  information: string,
  createdAt: Date,
  updatedAt: Date,
}
