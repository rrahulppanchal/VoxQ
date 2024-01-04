'use client';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Nav } from './nav';
import { Archive, ArchiveX, ChevronRight, File, Inbox, Link, Send, Trash2 } from 'lucide-react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Button, buttonVariants } from '../ui/button';
import Header from './header';
import Image from 'next/image';
import { ScrollArea } from '../ui/scroll-area';

export function MainLayout(props: any) {
  const [isSideBar, setIsSidebar] = useState(true);
  const toggle = () => {
    setIsSidebar(!isSideBar);
  };

  return (
    <>
      <TooltipProvider>
        <div className="flex">
          {isSideBar && (
            <aside className="border w-64 min-h-screen">
              <Nav
                isCollapsed={false}
                links={[
                  {
                    title: 'Dashboard',
                    to: '/dashboard',
                    label: '128',
                    icon: Inbox,
                    variant: 'ghost',
                  },
                  {
                    title: 'Drafts',
                    to: '/test',
                    label: '9',
                    icon: File,
                    variant: 'ghost',
                  },
                  {
                    title: 'Sent',
                    label: '',
                    to: '/',
                    icon: Send,
                    variant: 'ghost',
                  },
                  {
                    title: 'Junk',
                    label: '23',
                    to: '#',
                    icon: ArchiveX,
                    variant: 'ghost',
                  },
                  {
                    title: 'Trash',
                    label: '',
                    to: '#',
                    icon: Trash2,
                    variant: 'ghost',
                  },
                  {
                    title: 'Projects',
                    label: '',
                    to: '/project',
                    icon: Archive,
                    variant: 'ghost',
                  },
                ]}
              />
            </aside>
          )}

          <main className="flex-1 ">
            <header className="m-0 p-1 border border-l-0">
              <Header toggle={toggle} isSideBar={isSideBar} />
            </header>
            <ScrollArea className="h-[91vh] w-[100%]">
              <div className="p-3">{props.children}</div>
            </ScrollArea>
          </main>
        </div>
      </TooltipProvider>
    </>
  );
}
