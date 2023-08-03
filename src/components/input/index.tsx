interface InputProps{
   type: string
   placeHolder: string
   className?: string 
   value?: any 
   onChange?: (e:any)=>void
}
export const Input =(props:InputProps)=>{
    return(<>
    <input type={props.type} className={props.className} placeholder={props.placeHolder} onChange={props.onChange} value={props.value}/>
    </>)
}