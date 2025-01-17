import React, { useContext, useState } from 'react';

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
import Swal from 'sweetalert2';
import { FaPlug, FaPlus } from 'react-icons/fa';
import ReactStars from 'react-stars';
import { AuthContext } from '../Provider/AuthProvider';

const MyEnrollClassDetails = () => {

    const { user } = useContext(AuthContext)

    const [rating, setRating] = useState(0);
    const ratingChanged = (newRating) => {
        console.log(newRating);
        setRating(newRating);
    };


    const { isOpen, onOpen, onClose } = useDisclosure()

    const submitModal = useDisclosure()
    const feedbackModal = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const handleSubmitAssignment = (e) => {
        e.preventDefault()
        const task = initialRef.current.value

        axios.post('http://localhost:5000/assignment', { task })
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    submitModal.onClose()
                    Swal.fire("Assignment Submission Done!");
                }
            })
    }



    const handleSubmitFeedback = (e) => {
        e.preventDefault()
        const feedbackInfo = {
            title: 'ICT',
            name: user?.displayName,
            photo: user?.photoURL,
            description: finalRef.current.value,
            ratingStar: rating
        }

        axios.post('http://localhost:5000/feedback', feedbackInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    feedbackModal.onClose()
                    Swal.fire("Thanks For Your Feedback.");
                }
            })
    }


    return (
        <div className='mt-10 w-11/12 mx-auto flex flex-col items-start'>

            <Button className="px-5 py-2.5 font-semibold rounded-xl bg-emerald-700 text-gray-50 gap-3"
                onClick={feedbackModal.onOpen} ><FaPlus></FaPlus> Teaching Evaluation Report (TER) </Button>

            <h1 className='self-center text-3xl font-poppins underline  font-semibold text-green-700 my-6'>All Assignments</h1>

            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">

                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="bg-gray-100">
                            <tr className="text-center">
                                <th className="p-3">Assignment Title</th>
                                <th className="p-3">Description</th>
                                <th className="p-3">Total Marks</th>
                                <th className="p-3">Deadline</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Microsoft Corporation</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="dark:text-gray-600">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="dark:text-gray-600">Tuesday</p>
                                </td>
                                <td className="p-3 text-center">
                                    <Button className="px-5 py-2.5 font-semibold rounded-md bg-pink-600 text-gray-50"
                                        onClick={submitModal.onOpen} >Submit</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>



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


                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={feedbackModal.isOpen}
                    onClose={feedbackModal.onClose}
                    isCentered
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader mt={'4'} fontSize={24} fontWeight={'bold'} textAlign={'center'}>Give Feedback</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={3}>
                            <form onSubmit={handleSubmitFeedback}>
                                <FormControl >
                                    <FormLabel>Feedback </FormLabel>
                                    <Textarea ref={finalRef} placeholder='Description' required></Textarea>

                                    <div className='flex flex-col items-center'>
                                        <ReactStars
                                            count={5}
                                            value={rating}
                                            onChange={ratingChanged}
                                            size={24}
                                            color2={"#ffd700"}                                    

                                        />
                                        <h2>Value: {rating}</h2>
                                    </div>
                                </FormControl>
                                <Button type="submit" colorScheme='orange' width={'full'}>
                                    Send
                                </Button>
                            </form>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </ChakraProvider>
        </div>
    );
};

export default MyEnrollClassDetails;