import React from "react"
import Sidebar from "./sidebar"

import "../sass/main.scss"

const Layout = ({ children }) => {
  return (
    <main>
      <Sidebar/>
      +
      <div>
        <div className="mainbody container">{children}</div>
      </div>
    </main>
  )
}

export default Layout
