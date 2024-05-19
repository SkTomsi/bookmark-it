'use client';

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { DialogFooter } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { toast } from 'sonner';
import { useFormState } from 'react-dom';
import { CreateBookmarkSchema } from '@/app/lib/validations';
import { CreateBookmark } from '@/app/_actions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { FolderOptionList } from '@/app/_data-access/utils';
import { SubmitButton } from './FormButtons';
import { Loader2 } from 'lucide-react';

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
  id,
}: {
  id: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [state, formAction] = useFormState(CreateBookmark, initialState);
  const [options, setOptions] = useState<FolderOption[]>([]);
  const [folderId, setFolderId] = useState<string>(id);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    async function getFolderOptions() {
      try {
        const { optionList } = await FolderOptionList();

        setOptions(optionList);
        setIsLoading(false);
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
    formData.append('folderId', folderId as string);

    const form = Object.fromEntries(formData.entries());

    const validatedData = CreateBookmarkSchema.safeParse(form);

    if (!validatedData.success) {
      validatedData.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    formAction(validatedData.data);
  };

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
            <div className="relative w-full">
              <Select
                onValueChange={(value) => setFolderId(value)}
                defaultValue={id}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your folder" />
                </SelectTrigger>
                {isLoading && (
                  <div className="absolute left-2 top-1/2 transform -translate-y-[50%]">
                    <Loader2 className="animate-spin" size={16} />
                  </div>
                )}

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
        </div>
        <DialogFooter>
          <SubmitButton text="Save" />
        </DialogFooter>
      </form>
    </>
  );
}
