import Navbar from "../components/Navbar"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
        <body className="bg-[#deeced]">
            <Navbar />
            <div className="w-full max-w-6xl m-auto text-text">
                { children }
            </div>
        </body>
    </>
  )
}
