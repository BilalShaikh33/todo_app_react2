import { Todo } from "./components/Todo"


function App() {
const supabaseUrl =  import.meta.env.VITE_SUPABASEURL
  console.log(supabaseUrl)


  return (

    

    <Todo/>
  
  )
}

export default App
