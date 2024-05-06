'use client';

import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Button } from '../ui/button';
import { DialogFooter } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { toast } from 'sonner';
import { useFormState } from 'react-dom';
import { CreateFolder } from '@/app/_actions';
import { CreateFolderSchema } from '@/app/_lib/validations';

const initialState = {
  message: '',
  status: '',
};

export function CreateFolderForm({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element {
  const [state, formAction] = useFormState(CreateFolder, initialState);

  useEffect(() => {
    if (state?.status === 'error') {
      toast.error(state?.message);
    }
    if (state?.status === true) {
      setOpen(false);
      toast.success('We have created your new folder successfully!');
    }
  }, [state, setOpen]);

  const AddFolderAction = async (formData: FormData) => {
    const form = Object.fromEntries(formData.entries());

    const validatedData = CreateFolderSchema.safeParse(form);

    if (!validatedData.success) {
      console.log(validatedData.error.issues);
      validatedData.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    formAction(validatedData.data);
  };

  return (
    <>
      <form action={AddFolderAction}>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="name" className="text-right">
              Emoji
            </Label>
            <Input
              id="text"
              name="emoji"
              required
              placeholder="Add your emoji"
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
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
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="username" className="text-right">
              Description
              <span className="text-xs text-muted-foreground"> (optional)</span>
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
    </>
  );
}
