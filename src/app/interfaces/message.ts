export interface Message{
    severity: 'info' | 'warning' | 'danger' | 'success';
    title:string
    msg:string
    icon?:string
}