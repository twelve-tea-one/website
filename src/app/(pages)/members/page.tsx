import Button from '@/app/components/ui/custom/Button'
import MemberCard from '@/app/components/ui/custom/MemberCard'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/app/components/ui/DropdownMenu'
import { members } from '@/configs/constant'
import { ArrowDownAZ, ChevronDown } from 'lucide-react'

export default function Page() {
  return (
    <>
      <div className="px-8">
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-0">
            <Button active={false}>
              <div className="flex gap-1 items-center">
                <ArrowDownAZ size={16} />
                <span>Sort</span>
                <ChevronDown size={16} />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-4 bg-[#79b4b8] rounded-[16px]">
            Sort something here
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="space-x-4 text-center space-y-4 min-h-screen">
        {members.map((data, index) => {
          return (
            <MemberCard key={index} data={data} />
          )
        })}
      </div>
    </>
  )
}
