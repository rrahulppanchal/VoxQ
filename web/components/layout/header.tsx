import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ModeToggle } from '../theme/action-component';
import { Button } from '../ui/button';
import { BellRing, Blocks, ChevronLeft, ChevronRight, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

function Header(props: any) {
  return (
    <>
      <div className="flex items-center justify-between m-[10px]">
        <div className="flex gap-4 justify-center items-center">
          <Button variant="ghost" size="icon" onClick={() => props.toggle()}>
            {props.isSideBar ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
          {/* <h1>Logo</h1> */}
        </div>
        <div className="flex items-center justify-between gap-3">
          <Button
            variant="outline"
            className={cn(
              'relative h-9 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64',
            )}
            // onClick={() => setOpen(true)}
            // {...props}
          >
            <span className="hidden lg:inline-flex mb-[0.3rem]">Search utilities...</span>
            <span className="inline-flex lg:hidden">Search...</span>
            <kbd className="pointer-events-none absolute right-[0.4rem] top-[0.4rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
          <Button name="adfe" variant="ghost" size="icon">
            <Settings className="m-2 h-4 w-4" />
          </Button>
          <Button name="adfe" variant="ghost" size="icon">
            <BellRing className="m-2 h-4 w-4" />
          </Button>
          <ModeToggle />
          <Avatar className="h-9 w-9">
            {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
}

export default Header;
