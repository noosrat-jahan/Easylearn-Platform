
import { Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, FormControl, FormLabel, Textarea, ModalFooter, Button, ModalBody, Input, ButtonGroup, Card, CardBody, CardFooter, ChakraProvider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const TeachersAddedClass = () => {
    const { user } = useContext(AuthContext)
    const [editClass, setEditClass] = useState()
    // console.log(user.email);

    const { refetch, data: newCreatedClass = [] } = useQuery({
        queryKey: [user?.email, 'newClass'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/newlyCreatedClass?email=${user.email}`)
            console.log(res.data);
            return res.data

        }
    })
    console.log(newCreatedClass);


    // modal data for updating my class 
    const updateClass = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const titleRef = React.useRef(null)
    const imageRef = React.useRef(null)
    const priceRef = React.useRef(null)
    const descriptionRef = React.useRef(null)

    const handleupdateClass = (e, id) => {
        e.preventDefault()

        const updatedClassInfo = {
            classId: id,
            title: titleRef.current.value,
            image: imageRef.current.value,
            price: priceRef.current.value,
            description: descriptionRef.current.value,
        }
        console.log(updatedClassInfo);
        axios.put(`http://localhost:5000/newlyCreatedClass/${id}`, updatedClassInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    updateClass.onClose()
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        text: "Class Data Updated Successfully",
                        showConfirmButton: false,
                        timer: 4000
                    });

                }
            })
    }


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/newlyCreatedClass/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className='mx-auto my-5 w-11/12'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 gap-y-10 '>
                {
                    newCreatedClass?.map(newClass => <ChakraProvider key={newClass._id}>
                        <Card maxW='sm' pb={4} px={2} className='relative'>
                            <CardBody pb={0} p={2}>
                                <Image
                                    src={newClass.image}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                    height={170}
                                    width={'full'}
                                />
                                <div className='flex justify-between mt-2'>
                                    <Text>Name: {newClass.name}</Text> <Text>Email: {newClass.email}</Text>
                                </div>
                                <Stack mt='2' spacing='2'>
                                    <Heading fontSize={22}>{newClass.title} </Heading>
                                    <Text>
                                        {newClass.details}
                                    </Text>
                                    <Text color='orange.600' fontSize='2xl' fontWeight={'bold'}>
                                        $ {newClass.price}
                                    </Text>
                                    <Text fontSize='xl' className='absolute bg-[#FFEB00] rounded top-3 p-2 text-[#441752] font-bold'>
                                        Status: {newClass.status}
                                    </Text>
                                </Stack>
                            </CardBody>

                            <CardFooter className='mx-auto w-full '>
                                <ButtonGroup spacing='2' w={'full'}>
                                    <Button
                                        onClick={() => {
                                            setEditClass(newClass)
                                            updateClass.onOpen()
                                        }}
                                        variant='solid' colorScheme='blue' className='w-1/2'>
                                        Update
                                    </Button>

                                    <Button onClick={() => { handleDelete(newClass._id) }} variant='solid' colorScheme='red' className='w-1/2'>
                                        Delete
                                    </Button>
                                </ButtonGroup>

                            </CardFooter>
                            <Link
                                disabled={newClass.status === 'pending' || newClass.status === 'rejected'}
                                to={`/studentdashboard/teacherclasses/${newClass._id}`} variant='solid'
                                className='bg-neutral-600 text-lg btn font-semibold text-white p-3 rounded-md' w={'full'} margin={'auto'}
                            >
                                See Details
                            </Link>
                        </Card>


                    </ChakraProvider>)
                }
            </div>

            <ChakraProvider>
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={updateClass.isOpen}
                    onClose={updateClass.onClose}
                    isCentered
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader mt={'4'} fontSize={24} fontWeight={'bold'} textAlign={'center'}>Update Class Information</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={3} >
                            <form onSubmit={(e) => { handleupdateClass(e, editClass._id) }} className='space-y-3'>
                                <FormControl>
                                    <FormLabel>Class Title</FormLabel>
                                    <Input type="text" ref={titleRef}
                                        placeholder='title'
                                        defaultValue={editClass?.title} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Class Image</FormLabel>
                                    <Input type="text" ref={imageRef}
                                     placeholder='class image'
                                     defaultValue={editClass?.image} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Class Price</FormLabel>
                                    <Input type="text" ref={priceRef} 
                                    placeholder=' price'
                                    defaultValue={editClass?.price} />
                                </FormControl>
                                <FormControl >
                                    <FormLabel> Class Description</FormLabel>
                                    <Textarea ref={descriptionRef} 
                                    placeholder='Description'
                                    defaultValue={editClass?.details}
                                    ></Textarea>
                                </FormControl>
                                <Button type="submit" mt={6} colorScheme='orange' width={'full'}>
                                    Update
                                </Button>
                            </form>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </ChakraProvider>
        </div>
    );
};

export default TeachersAddedClass;