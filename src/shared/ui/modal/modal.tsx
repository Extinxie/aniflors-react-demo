type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  contentClassName?: string;
};

export const Modal = ({
  isOpen,
  onClose,
  children,
  contentClassName = "max-w-md",
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        <div
          className={`relative w-full rounded-xl bg-neutral-900 p-6 shadow-2xl ${contentClassName}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="cursor-pointer absolute right-4 top-4 text-neutral-500 hover:text-neutral-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>

          <div className="mt-2">{children}</div>
        </div>
      </div>
    </>
  );
};
