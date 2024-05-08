'use client';

import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';

export function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="flex items-center">
          <Loader2 className="mr-2 h-4 w-4  animate-spin" />
          Loading
        </Button>
      ) : (
        <Button type="submit">{text}</Button>
      )}
    </>
  );
}

export function SaveButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className="mt-2 w-full" disabled size={'sm'}>
          <Loader2 className="animate-spin h-4 w-4 mr-2" />
          Loading
        </Button>
      ) : (
        <Button size={'sm'} className="mt-2 w-full">
          Save
        </Button>
      )}
    </>
  );
}
