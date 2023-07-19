import ninjasstyles from '@/styles/ninjas.module.css'
import Head from 'next/head';
import Image from 'next/image';


const About = () => {
   return (
      <>
      <Head>
      <title>Listing</title>
    <meta name='keywords' content='listing' />
      </Head>
      <div>
      <Image src='/favicon.ico' width={50} height={70}></Image>
         <h1 className={ninjasstyles.container}>About</h1>
         <p className={ninjasstyles.title}>hellodasdada asdasdfgbdgkmbo d ac</p>
         <p className={ninjasstyles.title}>hellodasdada asdasdfgbdgkmbo d ac</p>
         <p className={ninjasstyles.title}>hellodasdada asdasdfgbdgkmbo d ac</p>
         <p className={ninjasstyles.title}>hellodasdada asdasdfgbdgkmbo d ac</p>
         <p className={ninjasstyles.title}>hellodasdada asdasdfgbdgkmbo d ac</p>
      </div>
</>
   );
}

export default About;