export interface User{
    id:number
    name:string
    email:string
    password:string
    confirm: string
    phone?:string
    adress?:string
    reg?:string
    last?:string
    status?:boolean
    role: string
}