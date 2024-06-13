import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { LockKeyhole, LogIn, Mail, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
};

export default function AuthenticationPage() {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="w-96 p-10 border rounded-md flex gap-5 flex-col">
        <span className="text-2xl font-bold mb-5	text-center">Login Into VoxQ</span>
        <div className="relative">
          <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Email" className="pl-8" />
        </div>
        <div className="relative">
          <LockKeyhole className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Password" type="password" className="pl-8" />
        </div>
        <Button type="button" className="w-full">
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </Button>
        <span className="text-sm text-slate-400 font-thin text-center">
          Enter all the detail provided by your organization or management properly. You have only 3 attempt to login else account get blocked.
        </span>
      </div>
    </div>
  );
}
