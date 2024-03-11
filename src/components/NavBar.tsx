import Link from "next/link";
export default function NavBar() {
  return (
    <div className="w-full h-20 bg-emerald-800 sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          {/* <img src="/vercel.svg" className="w-50 h-50" /> */}
          <ul className="hidden md:flex gap-x-6 text-white">
            <li>
              <Link href="/">
                <p>flux</p>
              </Link>
            </li>
            <li>
              <Link href="/mvvm">
                <p>mvvm</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
