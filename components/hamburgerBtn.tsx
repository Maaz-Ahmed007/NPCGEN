import clsx from "clsx"

export default function HamburgerBtn({
    isOpen,
    toggle,
    className,
}: {
    isOpen: boolean
    toggle: () => void
    className?: string
}) {
    return (
        <button
            type='button'
            className={clsx('md:hidden', className)}
            onClick={toggle}
        >
            <span
                className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}
            ></span>
            <span
                className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span
                className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}
            ></span>
        </button>
    )
}