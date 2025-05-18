"use client";

import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: Readonly<ModalProps>) => {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  };

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogOverlay>
        <DialogContent className="overflow-y-hidden bg-transparent border-none">
          <div className="hidden">
            <DialogHeader>
              <DialogTitle>Create new tasks list</DialogTitle>
              <DialogDescription>
                A form, that allow to create new task
              </DialogDescription>
            </DialogHeader>
          </div>
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};
