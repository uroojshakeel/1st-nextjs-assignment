


import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div>
        <ul>
        
          <li>
            <Link href="./about" target="-blank">About-us</Link>
          </li>
          <li>
            <Link href="./contact" target="-blank">Contact-us</Link>
          </li>
          <li>
            <Link href="./services" target="-blank">Services</Link>
          </li>
          </ul>

           
      </div></div>
  );
}