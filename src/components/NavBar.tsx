import Image from "next/image";

export default function NavBar() {
  return (
    <header className="bg-background w-full">
      <nav className="w-full px-4 py-6">
        <div className="logo max-w-7xl mx-auto">
          <Image 
            src="/image-6.webp" 
            alt="Square Pie Guys" 
            width={200} 
            height={26}
            className="h-8 w-auto"
          />
        </div>
      </nav>
    </header>
  );
}