export const getStaticPaths = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await res.json();

   const paths=data.map((ninja)=>{
      return {
         param:{id:ninja.id.toString()}
      }
   })
   return {
      paths, 
      fallback:false
   }
}

export const getStaticProps=async()=>{
   const id=context.params.id;
   const res= await fetch('https://jsonplaceholder.typicode.com/users/'+ id);
   const data=await res.json();


}
const Details = (ninja) => {
   return (<div>

      <h1>{ninja.id}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
   </div>);
}

export default Details;