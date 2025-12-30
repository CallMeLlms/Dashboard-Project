
import { FilterDropDown } from "./DropdownFilter"
import { ModalFilter } from "@/components/header/ModalFilter"

export function Header() {
    return (
        <header className="h-16 border-b flex items-center justify-between px-6 rounded-2xl bg-slate-950 mt-2 mr-2">
            <div className="text-white">Search / Breadcrumb</div>
            <div className="flex gap-5 justify-center items-center">
                {/* <FilterDropDown /> */}
                <ModalFilter/>
                {/* <div className="text-white">User Menu</div> */}
            </div>
        </header>
    )

}