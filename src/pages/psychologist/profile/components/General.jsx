// Chakra imports
import {
    Card,
    CardBody,
    Checkbox,
    FormControl,
    FormLabel,
    Input,
    SimpleGrid,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text
} from "@chakra-ui/react";

// Assets
export default function GeneralInformation(props) {
    const {
        ...rest
    } = props;

    // Chakra Color Mode
    const textColorSecondary = "gray.400";

    return (
        <Card
            mb={{
            base: "0px",
            "2xl": "20px"
        }}
            {...rest}>

            <CardBody>
                <Tabs variant='soft-rounded' colorScheme='orange'>
                    <TabList>
                        <Tab>Personal Info</Tab>
                        <Tab>Account Setting</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Text color={textColorSecondary} fontSize='md' fontWeight={"bold"} me='26px' mb='4px'>
                                Section 1
                            </Text>
                            <SimpleGrid columns='2' gap='20px'>
                                <FormControl id="fullName" isRequired>
                                    <FormLabel>Full name</FormLabel>
                                    <Input placeholder="Full name" value="Dr. Jane Smith" borderRadius="16px"/>
                                </FormControl>
                                <FormControl id="levelOfEducation" isRequired>
                                    <FormLabel>Level of education</FormLabel>
                                    <Input placeholder="Level of education" value="Ph.D. in Clinical Psychology" borderRadius="16px"/>
                                </FormControl>
                                <FormControl id="bachelorCertificate" isRequired>
                                    <FormLabel>Bachelor certificate</FormLabel>
                                    <Input placeholder="Bachelor certificate" borderRadius="16px"/>
                                </FormControl>
                                <FormControl id="certificates">
                                    <FormLabel>Certificates</FormLabel>
                                    <Input placeholder="Certificates" borderRadius="16px"/>
                                </FormControl>
                                <FormControl id="cv" isRequired>
                                    <FormLabel>CV</FormLabel>
                                    <Input placeholder="CV" borderRadius="16px"/>
                                </FormControl>
                                <FormControl id="yearsOfExperienceAsCounselor" isRequired>
                                    <FormLabel>Years of experience as counselor</FormLabel>
                                    <Input placeholder="Years of experience as counselor" value="5" borderRadius="16px"/>
                                    <Checkbox defaultChecked>received training as counselor</Checkbox>
                                </FormControl>
                            </SimpleGrid>

                            <Text color={textColorSecondary} fontSize='md' fontWeight={"bold"} me='26px' mt={"36px"} mb='4px'>
                                Section 2
                            </Text>
                            <SimpleGrid columns='2' gap='20px'>
                                <FormControl id="currentJob" isRequired>
                                    <FormLabel>Current job</FormLabel>
                                    <Input placeholder="Current job" value="Clinical Psychologist" borderRadius="16px"/>
                                </FormControl>
                                <FormControl id="expertiseField" isRequired>
                                    <FormLabel>Expertise field</FormLabel>
                                    <Input placeholder="Expertise field" value={"Career & Human Resources"} borderRadius="16px"/>
                                </FormControl>
                                <FormControl id="languagesMastered" isRequired>
                                    <FormLabel>Languages mastered</FormLabel>
                                    <Input placeholder="Languages mastered" value="English, Spanish" borderRadius="16px"/>
                                </FormControl>
                                <FormControl id="counselingMethod" isRequired>
                                    <FormLabel>Counseling method</FormLabel>
                                    <Input placeholder="Counseling method" value="Video call" borderRadius="16px"/>
                                </FormControl>
                                <FormControl id="cityOfResidence" isRequired>
                                    <FormLabel>City of residence</FormLabel>
                                    <Input placeholder="City of residence" value="City Name" borderRadius="16px"/>
                                </FormControl>
                                <FormControl id="cityOrDistrict" isRequired>
                                    <FormLabel>City/district</FormLabel>
                                    <Input placeholder="City/District Name" value="City/District Name" borderRadius="16px"/>
                                    <Checkbox defaultChecked>received training as counselor</Checkbox>
                                </FormControl>
                            </SimpleGrid>

                            <Text color={textColorSecondary} fontSize='md' fontWeight={"bold"} me='26px' mt={"36px"} mb='4px'>
                                Contact                           
                            </Text>
                            <SimpleGrid columns='2' gap='20px'>
                                <FormControl id="whatsappNumber" isRequired>
                                    <FormLabel>WhatsApp number</FormLabel>
                                    <Input placeholder="WhatsApp number" value="123-456-7890" borderRadius="16px"/>
                                </FormControl>
                                <FormControl id="devicesUsed" isRequired>
                                    <FormLabel>Devices used</FormLabel>
                                    <Input placeholder="Devices used" value="Device 1, Device 2" borderRadius="16px"/>
                                </FormControl>
                            </SimpleGrid>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </CardBody>
        </Card>
    );
}