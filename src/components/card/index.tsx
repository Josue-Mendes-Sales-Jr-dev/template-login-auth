interface CardProps{
    children:React.ReactNode
    title:string

}
export const Card =(props: CardProps)=>{
    return(<>
    <form>
       <h4>
        {props.title}
       </h4>
       <div>
        {props.children}
       </div>
    </form>
    </>)
}