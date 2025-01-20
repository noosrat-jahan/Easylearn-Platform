import { ChakraProvider, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Textarea, ModalFooter, Button, ModalBody, Input } from '@chakra-ui/react';

import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { PiStudentFill } from "react-icons/pi";
import { SiGoogletasks } from 'react-icons/si';
import { MdAssignment } from "react-icons/md";
import Swal from 'sweetalert2';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const TeacherClassDetails = () => {
    const {id} = useParams()
    console.log(id);
   
    const createassignment = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const titleRef = React.useRef(null)
    const markRef = React.useRef(null)
    const deadlineRef = React.useRef(null)
    const descriptionRef = React.useRef(null)

    
    const handleCreateAssignment = (e) => {
        e.preventDefault()

        const NewAssignmentInfo = {
            classId: id,
            title: titleRef.current.value,
            marks: markRef.current.value,
            description: descriptionRef.current.value,
            deadline: deadlineRef.current.value,
        }
        console.log(NewAssignmentInfo);
        axios.post('http://localhost:5000/createdAssignments', NewAssignmentInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    createassignment.onClose()
                    refetch()
                    Swal.fire("Assignment is created successfully");
                }
            })
    }

   
    const { refetch, data: newCreatedAssignment = [] } = useQuery({
        queryKey: ['newAssignment', id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/createdAssignments/${id}`)
            
            return res.data
        }
    })

    return (
        <div>
            <section className="p-6  text-gray-100 bg-gray-600">
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
                    <div className="flex p-4 items-center space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
                        <div className="flex justify-center  p-1 items-center rounded-lg sm:p-4 bg-violet-600 text-white text-3xl">
                            <PiStudentFill />
                        </div>
                        <div className="flex flex-col gap-3  justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">0</p>
                            <p className="capitalize">Total enrollment</p>
                        </div>
                    </div>
                    <div className="flex p-4 items-center space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
                        <div className="flex justify-center p-1 items-center rounded-lg sm:p-4 bg-violet-600 text-white text-3xl">
                            <MdAssignment />
                        </div>
                        <div className="flex flex-col gap-3 justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">{newCreatedAssignment.length}</p>
                            <p className="capitalize">Total assignment</p>
                        </div>
                    </div>
                    <div className="flex p-4 items-center space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
                        <div className="flex justify-center p-1 items-center rounded-lg sm:p-4 bg-violet-600 text-white text-3xl">
                            <SiGoogletasks />
                        </div>
                        <div className="flex flex-col gap-3 justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">0</p>
                            <p className="capitalize font-semibold">Total  Assignment submission</p>
                        </div>
                    </div>
                </div>
            </section>


            <div className='mt-10 w-11/12 mx-auto flex flex-col items-start'>
                <Button className="px-5 py-2.5 font-semibold rounded-xl bg-emerald-700 text-gray-50 gap-3 "
                    onClick={createassignment.onOpen} ><FaPlus></FaPlus> Create Assignment </Button>

                <h1 className='self-center text-3xl font-poppins underline  font-semibold text-green-700 my-6'> Assignments</h1>

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
                                {
                                    newCreatedAssignment.map(newassignment => <tr key={newassignment._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
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
                                            <Button className="px-5 py-2.5 font-semibold rounded-md bg-purple-600 text-gray-50"
                                            >Check</Button>
                                        </td>
                                    </tr>)
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>


                <ChakraProvider>
                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={createassignment.isOpen}
                        onClose={createassignment.onClose}
                        isCentered
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader mt={'4'} fontSize={24} fontWeight={'bold'} textAlign={'center'}>Add New Assignment</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={3} >
                                <form onSubmit={handleCreateAssignment} className='space-y-3'>
                                    <FormControl>
                                        <FormLabel>Assignment Title</FormLabel>
                                        <Input ref={titleRef} placeholder='title' />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Assignment Marks</FormLabel>
                                        <Input type="number" ref={markRef} placeholder='total mark' />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Assignment Deadline</FormLabel>
                                        <Input type="date" ref={deadlineRef} placeholder=' deadline' />
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel> Assignment Description</FormLabel>
                                        <Textarea ref={descriptionRef} placeholder='Description'></Textarea>
                                    </FormControl>
                                    <Button type="submit" mt={6} colorScheme='orange' width={'full'}>
                                        Add Assignment
                                    </Button>
                                </form>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </ChakraProvider>
            </div>
        </div>
    );
};

export default TeacherClassDetails;