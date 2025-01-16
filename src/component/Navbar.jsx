"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const session = useSession(); // ✅ Destructure properly

  console.log("Session Data:", session?.data?.user?.image); // ✅ Debugging output

  const links = [
    { title: "Posts", path: "/posts" },
    { title: "Meals", path: "/meals" },
    { title: "Gellary", path: "/gellary" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Dashboard", path: "/dashboard"},
  ];

  // ✅ Correct sign-in/sign-out handler
  const handleAuth = () => {
    router.push("/api/auth/signin");
  };

  return (
    <div className="bg-blue-400">
      <nav>
        <h1>
          next <span>hero</span>
        </h1>
        <ul>
          {links.map((link) => (
            <li key={link.path}>
              <Link className={`${pathName === link.path ? "text-blue-500" : ""}`} href={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* <button onClick={handleAuth} className="text-blue-400">
          {session?.status === "authenticated" ? "Log out" : "Log in"}
        </button> */}

        {
            session?.status==="authenticated"?<button onClick={()=>signOut()}>Log out</button> :(<div> <button onClick={handleAuth}>Log in</button>  <Link href={'/api/auth/signup'}><button>sign up</button></Link> </div>)
          
        }



        {/* ✅ Only render user details if session exists */}
        {session?.data?.user && session?.data?.user && (
          <div>
            <h6>
                <Image height={150} width={150} src={session?.data?.user?.image} alt="No Image" />
                <br/>
              {session.data.user.name ?? "Guest"}
              <br />
              {session.data.user.type ?? "No Type"}
            </h6>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
