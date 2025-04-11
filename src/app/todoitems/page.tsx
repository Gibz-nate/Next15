

// async function fetchdata(){
//     const data = await fetch('http://localhost:3001/api/todos', {
//         method: 'GET'
//     });
    
//     return data.json();
// }



// export default async function TodoItems() {

//     const items = await fetchdata();
//     console.log(items)


//     return(
//         <div>
//             <h1>Todo List</h1>
//             <ul>
//             {items.map((item: any) => (
//                 <li key={item.id}>{item.title}</li>
//             ))}
//             </ul>
            
            
//         </div>
//     )
// }