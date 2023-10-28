/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _|
 | |_| | | | | |_) || |  / / | | |  \| | | | | || |
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|

=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {Box, Grid} from "@chakra-ui/react";

// Custom components
import Banner from "./components/Banner";
import General from "./components/General";

// Assets
import banner from "@/assets/img/auth/banner.png";
import avatar from "@/assets/img/avatars/avatar4.png";

export default function Overview() {
    return (
        <Box
            pt={{
            base: "130px",
            md: "80px",
            xl: "80px"
        }}>
            {/* Main Fields */}
            <Grid
                templateColumns={{
                base: "1fr",
                lg: "1.34fr 2.62fr"
            }}
                templateRows={{
                base: "repeat(2, 1fr)",
                lg: "1fr"
            }}
                gap={{
                base: "20px",
                xl: "20px"
            }}>
                <Banner
                    gridArea='1 / 1 / 2 / 2'
                    banner={banner}
                    avatar={avatar}
                    name='Psychologist name'
                    job='Psychologist'
                    acceptedAppointments='17'
                    rejectedAppointments='5'
                    reviews='10'/>
                <General
                    gridArea={{
                    base: "2 / 1 / 3 / 2",
                    lg: "1 / 2 / 2 / 3"
                }}
                    minH='365px'
                    pe='20px'/>
            </Grid>

        </Box>
    );
}
