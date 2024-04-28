'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';

import { FolderPlus } from 'lucide-react';
import { useState } from 'react';
import { CreateFolderForm } from '../forms/CreateFolderForm';

export function CreateFolderModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={'secondary'} className="flex gap-2">
          <FolderPlus />
          Add Folder
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new folder</DialogTitle>
          <DialogDescription>
            Keep your bookmarks tidy and easily accessible with customizable
            folders and tags, so you can find what you need when you need it.
          </DialogDescription>
        </DialogHeader>
        <CreateFolderForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
