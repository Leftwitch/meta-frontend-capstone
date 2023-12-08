import { Button, useDisclosure } from "@chakra-ui/react"
import { ReservationModal } from "./ReservationModal"

export const ReservationButton = () => {
    const { onOpen, onClose, isOpen } = useDisclosure()


    return <>
        <Button bg='primary' borderRadius='30' onClick={onOpen}>
            Reserve a Table
        </Button>
        <ReservationModal onClose={onClose} isOpen={isOpen} />
    </>
}