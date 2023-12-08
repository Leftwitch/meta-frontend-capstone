import { Button, Center, Divider, FormControl, FormLabel, HStack, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spinner, Tag, VStack, useToast } from "@chakra-ui/react"
import { useFormik } from "formik"
import moment from "moment"
import { useEffect } from "react"
import { useMutation, useQuery } from "react-query"
import * as Yup from 'yup'
import { createReservation } from "./api/create-reservation"
import { getTimesAroundDate } from "./api/times"

type ReservationModalProps = {
    isOpen: boolean,
    onClose: () => void,
}

const ValidationSchema = Yup.object().shape({
    guests: Yup.number().required(),
    actualDate: Yup.date().required(),
    name: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    occasion: Yup.string().required()
})
//firstName, lastName, contactNumber, date, time, guests, occasion
// Date, Time, Guests => Sucht Zeit
// firstName, lastName, contact, occasion

export const ReservationModal = ({ isOpen, onClose }: ReservationModalProps) => {
    const toast = useToast()
    const reservationMutation = useMutation(createReservation)

    const formik = useFormik({
        initialValues: {
            guests: '',
            date: '',
            actualDate: null,
            time: null,
            name: '',
            email: '',
            occasion: 'birthday'
        },
        validationSchema: ValidationSchema,
        onSubmit: (data) => {
            reservationMutation.mutate(data)
        }
    })

    const { date: formDate, guests, actualDate } = formik.values
    const { isLoading: isLoadingDates, data: availableDates } =
        useQuery(['availableDates', formDate, guests],
            () => getTimesAroundDate((formDate && guests) ? new Date(formDate) : null, 8))


    useEffect(() => {
        formik.setFieldValue('actualDate', null)
    }, [availableDates])

    useEffect(() => {
        if (!reservationMutation.isSuccess) return;
        formik.resetForm()
        reservationMutation.reset()
        onClose()
        toast({
            title: 'Reservation placed!',
            description: 'Your reservation for 5 guests has been placed, check your e-mails for more details!',
            status: 'success',
            duration: 5000,
            isClosable: false,
        })
    }, [reservationMutation.isSuccess])

    return (
        <Modal onClose={reservationMutation.isLoading ? () => { } : onClose} size={['full', null, 'md']} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <form onSubmit={formik.handleSubmit}>
                    <ModalHeader>Reserve a Table</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <VStack spacing={4} align='stretch'>
                            <Heading size='md'>Enter Table information</Heading>
                            <VStack spacing={8}>
                                <FormControl isDisabled={reservationMutation.isLoading}>
                                    <FormLabel htmlFor="name">Select number of guests</FormLabel>
                                    <Input
                                        {...formik.getFieldProps('guests')}
                                        placeholder="Select number of guests"
                                        size="lg"
                                        type="number" />
                                </FormControl>
                                <FormControl isDisabled={reservationMutation.isLoading}>
                                    <FormLabel htmlFor="name">Select date & time</FormLabel>
                                    <Input
                                        {...formik.getFieldProps('date')}
                                        placeholder="Select Date and Time"
                                        size="lg"
                                        type="datetime-local" />
                                </FormControl>
                            </VStack>
                        </VStack>

                        {isLoadingDates && <Center mt={8}><Spinner /></Center>}
                        {availableDates && <>
                            <Divider my={8} />
                            <VStack spacing={4} align='stretch'>
                                <Heading size='md'>Select a fitting Time</Heading>
                                <HStack spacing={4} flexWrap='wrap'>
                                    {
                                        availableDates.map(date =>
                                            <Tag
                                                key={date.toISOString()}
                                                borderRadius='full'
                                                size="lg"
                                                onClick={() => formik.setFieldValue('actualDate', date.toISOString())}
                                                bg={actualDate == date.toISOString() ? 'primary' : undefined}>

                                                {moment(date).format('HH:mm')}
                                            </Tag>)
                                    }
                                </HStack>
                            </VStack>
                        </>}
                        {
                            actualDate && <>
                                <Divider my={8} />
                                <VStack spacing={4} align='stretch'>
                                    <Heading size='md'>Enter Personal Information</Heading>
                                    <VStack spacing={8}>
                                        <FormControl isDisabled={reservationMutation.isLoading}>
                                            <FormLabel htmlFor="name">Full Name</FormLabel>
                                            <Input
                                                {...formik.getFieldProps('name')}
                                                placeholder="Full Name"
                                                required
                                                size="lg" />
                                        </FormControl>

                                        <FormControl isDisabled={reservationMutation.isLoading}>
                                            <FormLabel htmlFor="email">E-Mail</FormLabel>
                                            <Input
                                                {...formik.getFieldProps('email')}
                                                placeholder="E-Mail"
                                                required
                                                size="lg" />
                                        </FormControl>

                                        <FormControl isDisabled={reservationMutation.isLoading}>
                                            <FormLabel htmlFor="email">Occasion</FormLabel>
                                            <Select
                                                required
                                                {...formik.getFieldProps('occasion')} size="lg">
                                                <option value='birthday'>Birthday</option>
                                                <option value='anniversary'>Anniversary</option>
                                            </Select>
                                        </FormControl>

                                    </VStack>
                                </VStack>
                            </>}
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" bg={formik.isValid ? 'primary' : undefined} disabled={!formik.isValid || reservationMutation.isLoading}>Place reservation</Button>
                        {reservationMutation.isLoading && <Spinner />}
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}