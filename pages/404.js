import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
   const router=useRouter();
   useEffect(()=>{
      setTimeout(()=>{
         router.push('/about');
      },3000)
   },[]);

   return (<div className='.not-found'>
      <h1> Oooppps</h1>
      <h2>That page can not be found </h2>
      <p>Go back to <Link legacyBehavior href="/"><a>HomePage</a></Link></p>

   </div>);
}

export default NotFound; 