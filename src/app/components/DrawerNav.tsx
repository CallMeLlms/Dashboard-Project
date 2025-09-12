import Link from "next/link"

export default function DrawernNavigation () {
    
    const navItems = [
        {name: "Home", href: ""},
        {name: "Other", href: ""},
        {name: "Other", href: ""},
    ]

    return (
        <>
        <div className="absolute h-full w-[180px] bg-amber-800">
            <div className="flex flex-col w-full h-full items-center">

                {navItems.map((item, index) => (
                    <div
                    key={index}
                    className=""
                    >
                        <p>
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
