import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import sx from './styles.module.css'
const Layoult = (props) => {
  const { children } = props
  return (
    <div className={sx.container}>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default Layoult
