import Link from 'next/link'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export default function FormCancelBtn() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Back to home</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Are you sure?
                    </DialogTitle>
                    <DialogDescription>
                        Unsaved data will be lost!
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose className='space-x-4'>
                        <Button>
                            <Link href="/">Yes</Link>
                        </Button>
                        <Button>No</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}