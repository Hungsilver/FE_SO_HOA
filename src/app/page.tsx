import Image from "next/image";
import Link from "next/link";
import './globals.css'
import React, { useState } from "react";


export default function Home() {

  return (
    <div>E-book Vĩnh Phúc
      <ul>
        <li>
          <Link href="/admin/dashboard/job">job</Link>
        </li>
        <li>
          <a href="/admin/dashboard/user">user</a>
        </li>
      </ul>
    </div>

    // <button> </button>

  )
}
