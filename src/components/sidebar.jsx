import { NavLink } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import RadiateLogo from "../assets/radiate-logo-white.png";
import * as Icons from "../assets/icons";

import { Flex, Box, List, ListItem, Center, HStack } from "@chakra-ui/react";

const Menus = [
  { title: "Home", link: "/u/", icon: Icons.HomeIcon },
  { title: "Mood Tracker", link: "/u/mood-tracker", icon: Icons.MoodIcon },
  { title: "Journal", link: "/u/journal", icon: Icons.JournalIcon },
  { title: "Counseling ", link: "/u/counseling", icon: Icons.CounselingIcon },
  {
    title: "Wellness Center",
    link: "/u/wellness-center",
    icon: Icons.WellnessIcon,
  },
];

function Sidebar() {
  return (
    <>
      <Flex color="white" className="sidebar">
        <Box bg="#FFAC31" w="280px" h="100vh" p="20px" pt="12px">
          <Center p="5" mb="5">
            <img src={RadiateLogo} alt="Radiate Logo" />
          </Center>
          <List spacing={2}>
            {Menus.map((Menu, index) => {
              return (
                <ListItem
                  key={index}
                  borderRadius="10"
                  p="3"
                  _hover={{ bg: "#ffb850", cursor: "pointer" }}
                >
                  <HStack>
                    <Icon as={Menu.icon} boxSize="6" mr="2" color="white" />
                    <NavLink
                      to={`${Menu.link}`}
                      className={({ isActive }) => (isActive ? "active" : "")}
                      state={{ title: Menu.title }}
                    >
                      {Menu.title}
                    </NavLink>
                  </HStack>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Flex>
    </>

    // <div className={show ? 'sidebar active' : 'sidebar'}>
    //   <img src={reactLogo} alt="Logo" className='logo' />
    //   <ul>
    //     <li>
    //       <Link to='/' className='active'>Home</Link>
    //     </li>
    //     <li>
    //       <Link to='/about'>Home</Link>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default Sidebar;
