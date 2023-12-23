import FormCancelBtn from "@/components/formCancelBtn";

export default function FormNavbar() {
    return (
        <>
            {/* For Desktop Version */}
            <nav className='bg-gray-50 border border-b-gray-600 w-full h-20 sticky top-0 px-12 py-4'>
                <div className='container mx-auto px-4 h-full'>
                    <div
                        className='flex justify-between items-center h-full'
                    >
                        {/* LOGO */}
                        <h1 className="text-gray-800 text-2xl font-bold uppercase">
                            npc-generator form
                        </h1>
                        <FormCancelBtn />
                    </div>
                </div>
            </nav>
        </>
    )
}