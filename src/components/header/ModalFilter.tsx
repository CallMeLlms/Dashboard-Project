import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { UseFilteredCsv } from "@/hooks/useFilteredCsv";

export function ModalFilter() {

    const { filterByGender, filterByNames } = UseFilteredCsv();

    console.log(filterByNames)
    console.log(filterByGender)

    return (
        <div className="bg-white">
            <Dialog>
                <DialogTrigger>Open filter</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Filter Items</DialogTitle>
                       <div className="flex flex-row flex-wrap w-full gap-2 overflow-auto mt-2">
                        {filterByNames?.map((item, key) => (
                         <button
                               key={key}
                              className="bg-red-50 hover:bg-red-100 text-sm px-3 py-1 rounded-full"
                                type="button"
                              >
                                  <span className="font-medium">{item}</span>
                              </button>
                          ))}
                       </div>
                    </DialogHeader>
                    <div className="h-30 border-4 border-grey border-dashed rounded-xl p-2">
                        Modal Drop box
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )

}

