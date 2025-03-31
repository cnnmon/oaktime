import '../styles/globals.css'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen w-screen flex justify-center items-center mt-[-20px]">
      <Head>
        <title>oaktime</title>
      </Head>
      <div className="container">
        <AnimatePresence exitBeforeEnter 
        mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="flex p-4 flex-col w-full justify-center gap-2 max-w-2xl"
          >
            <Image src="/images/title.png" alt="oaktime" width={500} height={500} />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
      <footer className="fixed bottom-0 text-center text-sm p-4 w-full">
        <p>•───────• <a className="link" href="https://github.com/cnnmon"><b>˙ᵕ˙</b></a> •───────•</p>
      </footer>
    </div>
  )
}

export default MyApp
