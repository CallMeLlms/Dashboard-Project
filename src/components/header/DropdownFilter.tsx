import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

export function FilterDropDown() {
    const [filteredOption, setFilteredOption] = useState(false);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Filter</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <DropdownMenu>
                            Filter by Attendance
                        </DropdownMenu>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Filter by Distance from Home
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Filter by Exam Score
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Filter by Exam Score Level
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Filter by Extracurricular Activities
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Filter by Family Income
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Filter by Gender
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Filter by Hours Studied
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Filter by Internet Access
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Filter by Motivation Level
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Filter by Parental Education Level
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Filter by Parental Involvement
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Filter by Peer Influence
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Filter by Physical Activity
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Filter by Previous Score Level
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Filter by Previous Scores
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Filter by School Type
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Filter by Sleep Hours
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Filter by Teacher Quality
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        Filter by Tutoring Sessions
                    </DropdownMenuItem>

                </DropdownMenuGroup>
                <DropdownMenuSeparator />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
