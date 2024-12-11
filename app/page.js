import LikeButton from './like-button';
function Header({title}){
    console.log(title); //{props is an object with a title property here, title : React}
    return (<h1>{title}</h1>);
 }
 export default function HomePage(){
    const names = ['Ada', 'Grace', 'Margaret'];
    
    

    return(
        <div>
           <Header title = "React" />
           <ul>
               {names.map((name) =>(
                    <li key = {name} > {name}</li>)
                     )}
            </ul>
            <LikeButton />
        </div>
    );
 }
        
    
    
