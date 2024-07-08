"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation(){

    const path = usePathname();
    return (

        <nav className={styles.nav}>
            
            <ul>
                <li><Link href="/">Home</Link> {path === "/" ? "🤟🏻" : ""}</li> 
                <li><Link href="/about">About Us</Link> {path === "/about" ? "🤟🏻" : ""}</li> 
                {/* <li><Link href="/movies/1">Movies</Link> {path === "/movies" ? "🤟🏻" : ""}</li>  */}
            </ul>
        </nav>

    );

}