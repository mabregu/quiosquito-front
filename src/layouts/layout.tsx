import Header from "@/components/Header";

type Props = {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="container mx-auto flex-1 py-10">
                {children}
            </main>
        </div>
    )
}

export default Layout;