
import { Button, ButtonGroup, Card, CardBody, CardFooter, ChakraProvider, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const TeachersAddedClass = () => {

    const { refetch, data: newCreatedClass = [] } = useQuery({
        queryKey: ['teachReq'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/newlyCreatedClass')
            return res.data
        }
    })
    console.log(newCreatedClass);

    return (
        <div className='mx-auto my-5 w-11/12'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                {
                    newCreatedClass.map(newClass=> <ChakraProvider key={newClass._id}>
                        <Card maxW='sm' pb={4} px={2} className='relative'>
                            <CardBody pb={0} p={2}>
                                <Image
                                    src={newClass.image}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <div className='flex justify-between mt-2'>
                                    <Text>Name: {newClass.name}</Text> <Text>Email: {newClass.email}</Text>
                                </div>
                                <Stack mt='2' spacing='2'>
                                    <Heading size='lg'>{newClass.title} </Heading>
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
                            {/* <Divider /> */}
                            <CardFooter className='mx-auto w-full '>
                                <ButtonGroup spacing='2' w={'full'}>
                                    <Button variant='solid' colorScheme='blue' className='w-1/2'>
                                        Update
                                    </Button>
                                    <Button variant='solid' colorScheme='red' className='w-1/2'>
                                        Delete
                                    </Button>
                                </ButtonGroup>
        
                            </CardFooter>
                            <Link to={`/studentdashboard/teacherclasses/${1}`} variant='solid' className='bg-neutral-600 text-lg font-semibold text-white p-3 rounded-md' w={'full'} margin={'auto'}>
                                See Details
                            </Link>
                        </Card>
                    </ChakraProvider>)
                }
            </div>
            

        </div>
    );
};

export default TeachersAddedClass;