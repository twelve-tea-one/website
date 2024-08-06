import { cn } from "@/lib/utils";
import { Member } from "@/types/member.d";
import Image from "next/image";

export default function MemberCard({ data }: { data: Member }) {
    return (
        <div className="group inline-block p-4 bg-white hover:bg-card rounded-[32px] text-left duration-500 border-8 border-white hover:border-primary cursor-pointer">
            <div className="flex gap-2 items-center text-gray group-hover:text-primary">
                <div className={cn("block rounded-full overflow-hidden", data.sex == "male" ? "bg-cyan-200" : "bg-pink-300")}>
                    <Image className="brightness-0 group-hover:brightness-100 duration-300 scale-125" src={data.avatar} alt={`${data.name}'s avatar`} width={100} height={0} />
                </div>
                <div className="ml-2">
                    <div className="h-8 overflow-hidden translate-y-2 group-hover:translate-y-0">
                        <p className="text-2xl font-bold group-hover:-translate-y-8 duration-500">{data.name.split(" ").splice(-2).join(" ")}</p>
                        <p className="text-2xl font-bold group-hover:-translate-y-8 duration-500">{data.name}</p>
                    </div>
                    <div className="h-6 max-w-xs overflow-hidden">
                        <p className="font-bold -translate-y-6 group-hover:translate-y-0 duration-500">{data.quote}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}