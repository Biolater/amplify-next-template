"use client";
import { AddJobForm } from "@/components/index";
import { FC, useRef, MouseEventHandler, RefObject, useEffect } from "react";
const AddJobModal: FC<{ isActive: boolean; handleCancel: () => void }> = ({
  isActive,
  handleCancel,
}) => {
  const jobModalRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const handleClickOutside: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    if (
      jobModalRef.current &&
      !jobModalRef.current.contains(event.target as Node)
    ) {
      handleCancel();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        handleCancel();
      }
    });
    return () =>
      document.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          handleCancel();
        }
      });
  }, []);
  return (
    <div
      onClick={handleClickOutside}
      className={`addJobModal  fixed transition-all duration-300 ${
        isActive
          ? "opacity-100 pointer-events-auto z-[9999]"
          : "opacity-0 pointer-events-none"
      } top-0 text-whitish h-svh w-full flex items-center justify-center bg-black/50`}
    >
      <div
        ref={jobModalRef}
        className="addJobModal__inner max-h-[90svh] overflow-auto bg-primary w-full rounded-none sm:w-max sm:rounded-lg p-6"
      >
        <p className="text-2xl font-semibold bg-gradient-to-r from-accent to-light text-center mb-2 text-transparent bg-clip-text">
          Add a job you have applied
        </p>
        <AddJobForm handleCancel={handleCancel} />
      </div>
    </div>
  );
};

export default AddJobModal;
