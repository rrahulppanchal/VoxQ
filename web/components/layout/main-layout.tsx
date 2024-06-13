'use client';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Nav } from './nav';
import {
  ActivitySquare,
  Archive,
  ArchiveX,
  Cable,
  ChevronRight,
  CircleUser,
  Contact,
  File,
  HeartHandshake,
  Inbox,
  LayoutDashboard,
  Link,
  PanelsTopLeft,
  Rss,
  ScrollText,
  Send,
  Trash2,
} from 'lucide-react';
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
                    icon: LayoutDashboard,
                    variant: 'ghost',
                  },
                  {
                    title: 'Leads',
                    to: '/leads',
                    label: '9',
                    icon: Cable,
                    variant: 'ghost',
                  },
                  {
                    title: 'Contacts',
                    label: '',
                    to: '/contacts',
                    icon: Contact,
                    variant: 'ghost',
                  },
                  {
                    title: 'Accounts',
                    label: '23',
                    to: '/accounts',
                    icon: CircleUser,
                    variant: 'ghost',
                  },
                  {
                    title: 'Deals',
                    label: '',
                    to: '/deals',
                    icon: HeartHandshake,
                    variant: 'ghost',
                  },
                  {
                    title: 'Projects',
                    label: '',
                    to: '/project',
                    icon: PanelsTopLeft,
                    variant: 'ghost',
                  },
                  {
                    title: 'Activities',
                    label: '',
                    to: '/activities',
                    icon: ActivitySquare,
                    variant: 'ghost',
                  },
                  {
                    title: 'Reports',
                    label: '',
                    to: '/reports',
                    icon: ScrollText,
                    variant: 'ghost',
                  },
                  {
                    title: 'Feeds',
                    label: '',
                    to: '/feeds',
                    icon: Rss,
                    variant: 'ghost',
                  },
                ]}
              />
            </aside>
          )}

          <main className="flex-1 ">
            <header className="m-0 p-0 border border-l-0">
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
