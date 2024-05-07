'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

import { BookmarkPlus } from 'lucide-react';
import { useState } from 'react';
import { AccentButton } from '../ui/AccentButton';
import { CreateBookmarkForm } from '../forms/CreateBookmarkForm';

export function CreateBookmarkModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <AccentButton>
          <BookmarkPlus />
          Add Bookmark
        </AccentButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Bookmark</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <CreateBookmarkForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
