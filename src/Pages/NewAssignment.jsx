
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Button,
    ChakraProvider,
    Textarea,
    Center,
} from '@chakra-ui/react'
import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const NewAssignment = ({ newassignment }) => {


    const { isOpen, onOpen, onClose } = useDisclosure()

    const submitModal = useDisclosure()
    const feedbackModal = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const handleSubmitAssignment = (e) => {
        e.preventDefault()

        const submissionInfo = {
             task:  initialRef.current.value,
             classId:  newassignment.classId
        }
        

        axios.post('https://edu-manage-website-server.vercel.app/assignment', submissionInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    submitModal.onClose()
                    // setSubmitDisabled(true)
                    Swal.fire("Assignment Submission Done!");
                }
            })
    }
    return (
        <>
            <tr key={newassignment._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                <td className="p-3">
                    <p>{newassignment.title}</p>
                </td>
                <td className="p-3">
                    <p>{newassignment.description}</p>
                </td>
                <td className="p-3">
                    <p>{newassignment.marks}</p>
                </td>
                <td className="p-3">
                    <p>{newassignment.deadline}</p>
                </td>
                <td className="p-3 text-center">
                    <Button
                        // disabled={submitDisabled}
                        className="px-5 py-2.5 font-semibold btn rounded-md bg-pink-600 text-gray-50"
                        onClick={submitModal.onOpen} >Submit</Button>
                </td>
            </tr>

            <ChakraProvider>
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={submitModal.isOpen}
                    onClose={submitModal.onClose}
                    isCentered
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader mt={'4'} fontWeight={'bold'} textAlign={'center'}>Submit Assignment</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={3}>
                            <form onSubmit={handleSubmitAssignment}>
                                <FormControl>
                                    <FormLabel>Assignment Link</FormLabel>
                                    <Textarea ref={initialRef} placeholder='Link' required={true}></Textarea>
                                </FormControl>
                                <Button type="submit" colorScheme='blue' marginTop={5} width={'full'}>
                                    Submit
                                </Button>
                            </form>

                        </ModalBody>
                    </ModalContent>
                </Modal>
            </ChakraProvider>
        </>
                   
    );
};

export default NewAssignment;





