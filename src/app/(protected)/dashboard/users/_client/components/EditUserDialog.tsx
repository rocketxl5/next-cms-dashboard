'use client';

import { useState } from 'react';
import { UserRow } from '@/app/(protected)/dashboard/users/_domain';
import { editUserAction } from '@/app/(protected)/dashboard/users/_server/actions';

interface EditUserDialogProps {
  user: UserRow;
  onClose: () => void;
}

export function EditUserDialog({ user, onClose }: EditUserDialogProps) {
  const [name, setName] = useState(user.name ?? '');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await editUserAction({
        id: user.id,
        name,
      });

      alert('user updated!');
      onClose();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error(error);
        alert(error.message || 'unknown error');
    } finally {
        setLoading(false);
    }
  };
   return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="bg-white p-6 rounded-lg w-96 space-y-4">
        <h2 className="text-lg font-semibold">Edit User</h2>

        <input
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose}>Cancel</button>

          <button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}
