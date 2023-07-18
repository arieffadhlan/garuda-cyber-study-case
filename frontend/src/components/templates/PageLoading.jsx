import { ArrowPathIcon } from "@heroicons/react/24/outline"

const PageLoading = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 min-h-screen w-full">
      <ArrowPathIcon className="w-10 h-10 animate-spin text-emerald-800" />
    </div>
  );
}

export default PageLoading;