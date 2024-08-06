"use client";

import Button from '@/app/components/ui/custom/Button'
import MemberCard from '@/app/components/ui/custom/MemberCard'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/app/components/ui/DropdownMenu'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/Select';
import { members } from '@/configs/constant'
import { Member } from '@/types/member'
import { ArrowDownAZ, ArrowUpAZ, ChevronDown, Flower2, Star, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Page() {
  const [membersList, setMembersList] = useState<Member[]>(members);
  const [filter, setFilter] = useState<{sort: "az" | "za", sex: "all" | "male" | "female" }>({sort: "az", sex: "all" });
  
  const updateMemberList = () => {
    if (filter.sex != "all") {
      setMembersList(membersList.filter((member) => member.sex == filter.sex))
    }
    if (filter.sort == "za") setMembersList(membersList.toReversed());
  }

  useEffect(() => {
    updateMemberList();
  }, [])

  useEffect(() => {
    setMembersList(members);
    updateMemberList();
  }, [filter])

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
          <DropdownMenuContent className="p-4 bg-[#79b4b8] rounded-[16px] space-y-2">
            <Select defaultValue={filter.sort} onValueChange={(e: "za" | "az") => setFilter({sort: e, sex: filter.sex})}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="az">
                  <div className="flex items-center gap-2">
                    <ArrowDownAZ size={16} /> A to Z
                  </div>
                </SelectItem>
                <SelectItem value="za">
                  <div className="flex items-center gap-2">
                    <ArrowUpAZ size={16} /> Z to A
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue={filter.sex} onValueChange={(e: "all" | "male" | "female") => setFilter({sort: filter.sort, sex: e})}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  <div className="flex items-center gap-2">
                    <Star /> All
                  </div>
                </SelectItem>
                <SelectItem value="male">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Sun /> Male
                  </div>
                </SelectItem>
                <SelectItem value="female">
                  <div className="flex items-center gap-2 text-pink-400">
                    <Flower2 /> Female
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="space-x-4 text-center space-y-4 min-h-screen">
        {membersList.map((data, index) => {
          return (
            <MemberCard key={index} data={data} />
          )
        })}
      </div>
    </>
  )
}
