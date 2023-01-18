import { Card, CardBody, Image, Stack, Heading, Text, ButtonGroup, Button, CardFooter, Divider, Grid, GridItem } from "@chakra-ui/react";
import { useEffect } from 'react';

function ProjectCard({title, desc, techStack, projectLink, repoLink}){
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                src='https://images.unsplash.com/photo-1514168757508-07ffe9ae125b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                alt='Workstation in a dark room'
                width="300px"
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{title}</Heading>
                <Text>
                    {desc}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    {/* {techStack.map(v=>v)} */}
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button 
                    style={{ 
                        color: "black",
                        backgroundColor: "yellow",
                        borderColor: 'yellow',
                        border: '1px solid',
                        cursor: 'pointer'
                     }} 
                    onClick={()=>window.open(projectLink)}>
                    Check Project
                </Button>
                <Button 
                    style={{ 
                        color: "white",
                        backgroundColor: "black",
                        borderColor: 'white',
                        border: '1px solid',
                        cursor: 'pointer'
                    }} 
                    onClick={()=>window.open(repoLink)}>
                    Visit Repository
                </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

function Desktop() {
    return (
        <Grid
            templateColumns='repeat(3, 1fr)' gap={20}
            rowGap={20} 
            style={{
                zIndex: '5',
                position: 'absolute',
                color: 'white',
                marginTop: "123px",
                paddingLeft: '5%',
                paddingRight: '5%',
                paddingTop: "0",
                paddingBottom: "2%"}}>
                <GridItem>
                    <ProjectCard
                            title={`Mealoo`}
                            desc={`Mealoo provides an alternative to directly hiring professional nutritionists and dietitians. It has a monthly or annually subscription business model.`}
                            repoLink={`https://github.com/withoutwax13/mealoo-static`}
                            projectLink={`https://withoutwax13.github.io/mealoo-static/`}
                    />
                </GridItem>
                <GridItem w='100%'>
                    <ProjectCard 
                        title={`PushCart.Com (E-commerce Web App)`}
                        projectLink={`https://withoutwax13.github.io/pushcart/`}
                        desc={`Client web application built on ReactJS that
                        serves as the buyer portal for PushCart.Com's
                        series of applications built as a capstone
                        requirement for a BootCamp. Other app inclusions: Seller portal, Express and
                        laravel backend`}
                        repoLink={`https://github.com/withoutwax13/pushcart`}
                    />
                </GridItem>
                <GridItem>
                    <ProjectCard
                            title={`COVID-19 TRACKER (Real-time Data Tracker Web App)`}
                            desc={`Client web application built on ReactJS that
                            shows real-time data of COVID-19 cases, deaths
                            Utilized react-globe and recharts for visualizing
                            data per country, per data range
                            `}
                            repoLink={`https://github.com/withoutwax13/track-covid19`}
                            projectLink={`http://withoutwax13.github.io/track-covid19`}
                    />
                </GridItem>
                <GridItem>
                    <ProjectCard
                            title={`Group-Work`}
                            desc={`Social Media Service 
                            catering group discussions/projects`}
                            repoLink={`https://github.com/withoutwax13/group-work`}
                            projectLink={`https://github.com/withoutwax13/group-work`}
                    />
                </GridItem>
        </Grid>
    );
}

const NonDesktop = () => {
    return (
        <Grid
            templateColumns='repeat(1, 1fr)' gap={20}
            rowGap={20} 
            style={{
                zIndex: '5',
                position: 'absolute',
                color: 'white',
                marginTop: "123px",
                paddingLeft: '5%',
                paddingRight: '5%',
                paddingTop: "0",
                paddingBottom: "2%"}}>
                <GridItem>
                    <ProjectCard
                            title={`Mealoo`}
                            desc={`Mealoo provides an alternative to directly hiring professional nutritionists and dietitians. It has a monthly or annually subscription business model.`}
                            repoLink={`https://github.com/withoutwax13/mealoo-static`}
                            projectLink={`https://withoutwax13.github.io/mealoo-static/`}
                    />
                </GridItem>
                <GridItem w='100%'>
                    <ProjectCard 
                        title={`PushCart.Com (E-commerce Web App)`}
                        projectLink={`https://withoutwax13.github.io/pushcart/`}
                        desc={`Client web application built on ReactJS that
                        serves as the buyer portal for PushCart.Com's
                        series of applications built as a capstone
                        requirement for a BootCamp. Other app inclusions: Seller portal, Express and
                        laravel backend`}
                        repoLink={`https://github.com/withoutwax13/pushcart`}
                    />
                </GridItem>
                <GridItem>
                    <ProjectCard
                            title={`COVID-19 TRACKER (Real-time Data Tracker Web App)`}
                            desc={`Client web application built on ReactJS that
                            shows real-time data of COVID-19 cases, deaths
                            Utilized react-globe and recharts for visualizing
                            data per country, per data range
                            `}
                            repoLink={`https://github.com/withoutwax13/track-covid19`}
                            projectLink={`http://withoutwax13.github.io/track-covid19`}
                    />
                </GridItem>
                <GridItem>
                    <ProjectCard
                            title={`Group-Work`}
                            desc={`Social Media Service 
                            catering group discussions/projects`}
                            repoLink={`https://github.com/withoutwax13/group-work`}
                            projectLink={`https://github.com/withoutwax13/group-work`}
                    />
                </GridItem>
        </Grid>
    );
}

const Portfolio = () => {
    useEffect(()=>{
        document.title = 'Portfolio | John Patrick Valera | Full Stack Developer'
    })
    var deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const renderPortfolio = () => {
        return deviceWidth > 1280 ? <Desktop /> : <NonDesktop />
    }
    return renderPortfolio()
}

export default Portfolio;