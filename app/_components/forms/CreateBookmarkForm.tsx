'use client';

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { DialogFooter } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { toast } from 'sonner';
import { useFormState } from 'react-dom';
import {
  CreateBookmarkSchema,
  CreateFolderSchema,
} from '@/app/lib/validations';
import { CreateBookmark } from '@/app/_actions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { FolderOptionList } from '@/app/_data-access/utils';

const initialState = {
  message: '',
  status: '',
};

interface FolderOption {
  label: string;
  value: string;
  emoji: string;
}

export function CreateBookmarkForm({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [state, formAction] = useFormState(CreateBookmark, initialState);
  const [options, setOptions] = useState<FolderOption[]>([]);
  const [folderId, setFolderId] = useState<string>('');

  useEffect(() => {
    async function getFolderOptions() {
      try {
        const { optionList } = await FolderOptionList();

        setOptions(optionList);
      } catch (err) {
        console.log(err);
      }
    }

    getFolderOptions();
  }, []);

  useEffect(() => {
    if (state?.status === 'error') {
      toast.error(state?.message);
    }
    if (state?.status === true) {
      setOpen(false);
      toast.success('Bookmarked your new link!');
    }
  }, [state, setOpen]);

  const AddBookmarkAction = async (formData: FormData) => {
    formData.append('folderId', folderId);

    const form = Object.fromEntries(formData.entries());

    const validatedData = CreateBookmarkSchema.safeParse(form);

    if (!validatedData.success) {
      console.log(validatedData.error.issues);
      validatedData.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    formAction(validatedData.data);
  };

  console.log(folderId);

  return (
    <>
      <form action={AddBookmarkAction}>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="url" className="text-right">
              Link
            </Label>
            <Input
              id="text"
              name="url"
              required
              placeholder="Add your emoji"
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="folder" className="text-right">
              Folder
            </Label>
            <Select onValueChange={(value) => setFolderId(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select your folder" />
              </SelectTrigger>
              <SelectContent>
                {options.length > 0 &&
                  options.map((option) => (
                    <SelectItem value={option.value} key={option.value}>
                      {option.emoji + ' ' + option.label}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </form>
    </>
  );
}
