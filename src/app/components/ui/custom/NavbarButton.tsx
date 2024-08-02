import { cn } from "@/lib/utils";
import { ReactElement } from "react";

export default function Button({ children, active, login }: { children: ReactElement | string, active: boolean, login?: boolean }) {
    return (
        <>
            <div 
                className={cn("duration-300 cursor-pointer px-6 py-4 text-white shadow rounded-lg font-bold", login ? "bg-[#7eb678]" : "bg-primary", active ? "bg-buttonActive" : "hover:bg-buttonActive")}
                style={{ borderTopLeftRadius: '48px', borderTopRightRadius: '24px', borderBottomRightRadius: '48px', borderBottomLeftRadius: '24px' }}
            >
                <div className="drop-shadow-lg">
                    {children}
                </div>
            </div>
        </>
    )
}