'use client';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Nav } from './nav';
import { Archive, ArchiveX, File, Inbox, Link, Send, Trash2 } from 'lucide-react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Button, buttonVariants } from '../ui/button';
import Header from './header';

export function MainLayout(props: any) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup direction="vertical" className="min-h-[100vh] max-w-full rounded-lg border">
        <ResizableHandle />
        <ResizablePanel defaultSize={100}>
          <ResizablePanelGroup direction="horizontal" className="min-h-[200px] max-w-full">
            <ResizablePanel
              defaultSize={15}
              maxSize={25}
              minSize={7}
              collapsedSize={3}
              collapsible={true}
              // onCollapse={(collapse: any) => console.log(collapse)}
              onResize={(size) => (size < 4 ? setIsCollapsed(true) : setIsCollapsed(false))}
            >
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={7} maxSize={7} minSize={7}>
                  <Button name="adfe" variant="outline" size="icon">
                    <Archive className="m-2 h-4 w-4" />
                  </Button>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>
                  <Nav
                    isCollapsed={isCollapsed}
                    links={[
                      {
                        title: 'Inbox',
                        label: '128',
                        icon: Inbox,
                        variant: 'default',
                      },
                      {
                        title: 'Drafts',
                        label: '9',
                        icon: File,
                        variant: 'ghost',
                      },
                      {
                        title: 'Sent',
                        label: '',
                        icon: Send,
                        variant: 'ghost',
                      },
                      {
                        title: 'Junk',
                        label: '23',
                        icon: ArchiveX,
                        variant: 'ghost',
                      },
                      {
                        title: 'Trash',
                        label: '',
                        icon: Trash2,
                        variant: 'ghost',
                      },
                      {
                        title: 'Archive',
                        label: '',
                        icon: Archive,
                        variant: 'ghost',
                      },
                    ]}
                  />
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={85}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={7} maxSize={7}>
                  <Header />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel>{props.children}</ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
