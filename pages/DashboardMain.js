import React, { Component, useState } from "react"
// import {
//   Header,
//   Footer,
//   Hero,
// } from 'components/molecules'
import {Dashboard,AnalyticsContent} from 'components/dashboard'
import { Header } from "components/molecules"
import { AuthProvider } from "../contexts/AuthContext"

// import { AuthProvider,useAuth } from "../contexts/AuthContext"


export default function DashboardMain() {


  // const { login,currentUser } = useAuth()

  return (
    <>
    <div >



    <AuthProvider>
    <Dashboard />
    </AuthProvider>
    {/* <div>
        <h1>Dashboard Main</h1>
        <h4>Current User</h4>
       
      </div> */}

    </div>
    </>

  )
}
