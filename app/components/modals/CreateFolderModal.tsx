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
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { FolderPlus } from 'lucide-react';
import { useFormState } from 'react-dom';
import { CreateFolder } from '@/app/bookmarks/action';

const initialState = {
  message: '',
  status: '',
};

export function CreateFolderModal() {
  const [state, formAction] = useFormState(CreateFolder, initialState);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <FolderPlus />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new folder</DialogTitle>
          <DialogDescription>
            Keep your bookmarks tidy and easily accessible with customizable
            folders and tags, so you can find what you need when you need it.
          </DialogDescription>
        </DialogHeader>
        <form action={formAction}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Enter Folder Name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                id="username"
                name="description"
                className="col-span-3"
                placeholder="Enter Description"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
