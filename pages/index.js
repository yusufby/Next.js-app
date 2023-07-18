
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import Link from 'next/link';
import Head from 'next/head'; 
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   <Head>
    <title>Listing</title>
    <meta name='keywords' content='listing' />
   </Head>
<div>

 <h1 className={styles.text}> HomePage</h1>
 <p>hellodasdada asdasdfgbdgkmbo d ac</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <Link href="/ninjas" legacyBehavior>Listing</Link>
</div>
</>
  );
   
}
