import ninjasstyles from '@/styles/ninjas.module.css'
import Head from 'next/head';


const About = () => {
   return (
      <>
      <Head>
      <title>Listing</title>
    <meta name='keywords' content='listing' />
      </Head>
      <div>
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