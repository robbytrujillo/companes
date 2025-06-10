import Link from "next/link"

import React from 'react'

const Footer = () => {
  return (
    <div className="container mx-auto px-4 w-full max-w-7xl">
        <div className="pt-20 pb-6 flex items-center justify-between sm:flex-row flex-col sm:gap-0 gap-4">
            <p>&copy; Copyright 2025 <span>Robby Ilham</span></p>
            <div className="flex gap-4">
                <Link href={"#"} target={"_blank"} className="text-slate-700 hover:text-slate-600">Terms</Link>
                <Link href={"#"} target={"_blank"} className="text-slate-700 hover:text-slate-600">Privacy</Link>
                <Link href={"#"} target={"_blank"} className="text-slate-700 hover:text-slate-600">Cookies</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer
