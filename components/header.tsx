import Link from "next/link"

const Header = () => {
    return (
        <header className="fixed w-full h-20 flex items-center bg-amber-950 text-slate-50">
            <nav className="w-full flex justify-between items-center m-auto max-w-screen-xl">
                <Link href="/">Logo</Link>
                <ul className="flex items-center gap-10">
                    <li><Link href="/">Início</Link></li>
                    <li><Link href="/public">Pública</Link></li>
                    <li><Link href="/private">Privada</Link></li>
                    <li><button>Sair</button></li>
                </ul>
            </nav>
        </header>
    )
}

export { Header }