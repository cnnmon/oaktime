import '../styles/globals.css'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto mt-[6vh] flex justify-center">
      <Head>
        <title>oaktime</title>
      </Head>
      <AnimatePresence exitBeforeEnter 
      mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="flex p-4 flex-col w-full justify-center gap-2 max-w-2xl"
        >
          <p className="text-3xl">which oaktime are you?</p>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <footer className="fixed bottom-0 w-full text-center text-sm p-4 justify-center">
        <p>•───────• <a className="link" href="https://github.com/cnnmon"><b>˙ᵕ˙</b></a> •───────•</p>
      </footer>
    </div>
  )
}

export default MyApp
