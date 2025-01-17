import { Button, ButtonGroup, Card, CardBody, CardFooter, ChakraProvider, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminAllClasses = () => {
    return (
        <div>
            <h1>admin all classess</h1>

            <div className='mx-auto my-5 w-11/12'>
            <ChakraProvider>
                <Card maxW='sm' pb={4} px={2} className='relative'>
                    <CardBody pb={0} p={2}>
                        <Image
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <div className='flex justify-between mt-2'>
                             <Text>Email: </Text>
                        </div>
                        <Stack mt='2' spacing='2'>
                            <Heading size='md'>Class Title: </Heading>
                            <Text>
                                Description: This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces, earthy toned spaces and for people who love a chic design with a
                                sprinkle of vintage design.
                            </Text>
                            <Text color='orange.600' fontSize='2xl' fontWeight={'bold'}>
                                $ 450
                            </Text>
                            <Text fontSize='xl' className='absolute bg-amber-500 rounded top-5 p-2 text-teal-800 font-bold'>
                                Status: Pending
                            </Text>
                        </Stack>
                    </CardBody>
                    {/* <Divider /> */}
                    <CardFooter className='mx-auto w-full '>
                        <ButtonGroup spacing='2' w={'full'}>
                            <Button variant='solid' colorScheme='green' className='w-1/2'>
                                Approve
                            </Button>
                            <Button variant='solid' colorScheme='red' className='w-1/2'>
                                Reject
                            </Button>
                        </ButtonGroup>

                    </CardFooter>
                    <Link to={`/studentdashboard/teacherclasses/${1}`} variant='solid' className='bg-blue-400 text-lg font-semibold text-white p-3 rounded-md' w={'full'} margin={'auto'}>
                        See Progress
                    </Link>
                </Card>
            </ChakraProvider>

        </div>
        </div>
    );
};

export default AdminAllClasses;