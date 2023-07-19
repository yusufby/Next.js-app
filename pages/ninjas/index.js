import styles from "../../styles/ninjas.module.css"
import Link from 'next/link'




export const getStaticProps=async()=>{
const res=await fetch('https://jsonplaceholder.typicode.com/users');
const data=await res.json();
return {
   props:{ninjas:data}
}
}
const Ninjas = ({ninjas}) => {

   return (<div>
      <h1>Ninjas</h1>
      {ninjas.map(ninja=>(
         <Link legacyBehavior href={'./ninjas/' + ninja.id} key={ninja.id} >  
         <a className={styles.single}>
         <h3>{ninja.name}</h3>
         <h3>{ninja.email}</h3>
          </a>
         </Link>
      ))}
   </div>  );
}
 
export default Ninjas;