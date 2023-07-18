import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { closeOffcanvas } from "@/redux/features/offcanvas/offcanvasSlice"

const Offcanvas = ({ title, children }) => {
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.offcanvas);

  useEffect(() => {
    if (show) dispatch(closeOffcanvas());
  }, []);

  const close = () => {
    dispatch(closeOffcanvas());
  }
  
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60 transition-opacity" />
        </Transition.Child>
        <div className="fixed overflow-hidden inset-0">
          <div className="absolute overflow-hidden inset-0">
            <div className="pointer-events-none fixed flex inset-y-0 right-0 max-w-full xs:pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="overflow-y-auto h-full mt-[72px] pb-[72px] bg-white shadow-xl">
                    <div className="px-5 pt-5">
                      <div className="flex justify-between items-start">
                        <Dialog.Title className="font-medium text-lg text-gray-900">
                          {title}
                        </Dialog.Title>
                        <div className="flex items-center h-7 ml-3">
                          <button
                            type="button"
                            className="p-2 -m-2 outline-none text-gray-400 hover:text-gray-500"
                            onClick={close}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {children}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Offcanvas;