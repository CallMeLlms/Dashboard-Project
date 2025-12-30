import { Skeleton } from "../ui/skeleton"

type SkeletonProps = {
    className: string;
}


const SkeletonSmall = ({} : SkeletonProps) => {
    return (
        <Skeleton className="w-[100px] h-[20px] rounded-sm bg-[rgba(94,94,94,0.4)]" />
    )
}

const SkeletonMedium = ({}) => {
    return (
        <Skeleton className="w-[140px] h-[40px] rounded-sm bg-[rgba(94,94,94,0.4)]" />
    )
}

const SkeletonLarge = ({}) => {
    return (
        <Skeleton className="w-[160px] h-[60px] rounded-sm bg-[rgba(94,94,94,0.4)]" />
    )
}


export {
    SkeletonSmall,
    SkeletonMedium,
    SkeletonLarge
}

