import { Card } from "@/components/card"
import { Input } from "@/components/input"
import "tailwindcss/tailwind.css"

export default function Register(){
    return(
    <>
    <Card title="Cadastro">
       <Input type="text" placeHolder="Didite seu nome"/>
       <Input type="email" placeHolder="Didite seu email"/>
       <Input type="password" placeHolder="Didite sua senha"/>
    </Card>
    </>
    )
}