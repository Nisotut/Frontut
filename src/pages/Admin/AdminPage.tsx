
import { Button, Container } from "react-bootstrap";
import axios from 'axios'
import { useState, FormEvent, useCallback } from 'react'




export const AdminPage = () => {
    
    const [ data, setData ] = useState<any[]>([])
   // const [name, setName] = useState<string | undefined>();
    const getCategories = useCallback (async() => {
        const {data} = await axios.create({ baseURL: 'http://localhost:3334/api'}).get('/categories')
        setData(data)
}, [])

     
    
    

    
    
        const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const form = event.currentTarget;
        const formElements = form.elements as typeof form.elements  & {
        name: { value: string }
        };
        const name = formElements.name.value;
        const response =  axios.create({ baseURL: 'http://localhost:3334/api'}).post('/categories', {name})
 }, [])




   

     
   




//     const sendItem = useCallback (async () => {
        
//         const response = await axios.create({ baseURL: 'http://localhost:3334/api'}).post('/categories', {name})
// }, [])
    return (
        
        <Container className="d-flex flex-column">
            
            {/* <form>
            <input type='text' name={'name'} onChange={(event) => setName(event.target.value)}/>
            <Button type='button' onClick={() => sendItem()}>Отправить</Button>
        </form> */}
        
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" />
            <Button variant={"outline-dark"} type="submit">отправить</Button>
        </form>
    

        


            
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() =>getCategories()}
                //onClick={() => setTypeVisible(true)}
            >
                Запросить категории
            </Button>
            {data && data !== null && data.map((value) => (
        <p key={value.id}>{value.name}</p>))}
      
        
            
            
        </Container>
        
        
        


        
    )
}

export default AdminPage;

