import { useParams } from "react-router-dom"

export default function MainPage() {
   const {username} = useParams()
  return (
    <div>MainPage {username} </div>
  )
}
