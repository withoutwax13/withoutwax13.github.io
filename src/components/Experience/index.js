import { Button, Heading, VStack, Grid, GridItem, Highlight} from '@chakra-ui/react'
import { useState, useEffect } from 'react';


const experienceTextForDesktop = [
    <Heading as="h3" fontSize="40px" fontFamily="Calibri" style={{color: "white", paddingTop: '30px', marginRight: '100px',}}>
        <Highlight
            query={['917Venture/KodeGo Fullstack PHP Bootcamp', 'Upskilled', 'expanded network']}
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
        >
            Upskilled and expanded network by graduating on 917Venture/KodeGo Fullstack PHP Bootcamp program.
        </Highlight>
    </Heading>,
    <Heading as="h3" fontSize="40px" fontFamily="Calibri" style={{color: "white", paddingTop: '30px', marginRight: '100px',}}>
        <Highlight
            query={['BS Mechanical Engineering']}
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
        >
            Graduated on Bicol State College of Applied Sciences and Technology with a degree on BS Mechanical Engineering.
        </Highlight>
    </Heading>,
    <Heading as="h3" fontSize="40px" fontFamily="Calibri" style={{color: "white", paddingTop: '30px', marginRight: '100px',}}>
        <Highlight
            query={['focus on freelance business', 'Quantrics Enterprise, Inc.']}
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
        >
            Parted ways with Quantrics Enterprise, Inc. to focus on freelance business.
        </Highlight>
        
    </Heading>,
    <Heading as="h3" fontSize="40px" fontFamily="Calibri" style={{color: "white", paddingTop: '30px', marginRight: '100px',}}>
        <Highlight
            query={['Quantrics Enterprise, Inc.']}
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
        >
            Joined Quantrics Enterprise, Inc.
        </Highlight>
    </Heading>,
    <Heading as="h3" fontSize="40px" fontFamily="Calibri" style={{color: "white", paddingTop: '30px', marginRight: '100px',}}>
        <Highlight
            query={['software development services']}
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
        >
            Started freelance business providing software development services.
        </Highlight>
        
    </Heading>,
]

const experienceTextForNonDesktop = [
    <Heading as="h3" fontSize="12px" fontFamily="Calibri" style={{color: "white", paddingTop: '30px', paddingRight: '30px'}}>
        <Highlight
            query={['917Venture/KodeGo Fullstack PHP Bootcamp', 'Upskilled', 'expanded network']}
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
        >
            Upskilled and expanded network by graduating on 917Venture/KodeGo Fullstack PHP Bootcamp program.
        </Highlight>
    </Heading>,
    <Heading as="h3" fontSize="12px" fontFamily="Calibri" style={{color: "white", paddingTop: '30px', paddingRight: '30px'}}>
        <Highlight
            query={['BS Mechanical Engineering']}
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
        >
            Graduated on Bicol State College of Applied Sciences and Technology with a degree on BS Mechanical Engineering.
        </Highlight>
    </Heading>,
    <Heading as="h3" fontSize="12px" fontFamily="Calibri" style={{color: "white", paddingTop: '30px', paddingRight: '30px'}}>
        <Highlight
            query={['focus on freelance business', 'Quantrics Enterprise, Inc.']}
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
        >
            Parted ways with Quantrics Enterprise, Inc. to focus on freelance business.
        </Highlight>
        
    </Heading>,
    <Heading as="h3" fontSize="12px" fontFamily="Calibri" style={{color: "white", paddingTop: '30px', paddingRight: '30px'}}>
        <Highlight
            query={['Quantrics Enterprise, Inc.']}
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
        >
            Joined Quantrics Enterprise, Inc.
        </Highlight>
    </Heading>,
    <Heading as="h3" fontSize="12px" fontFamily="Calibri" style={{color: "white", paddingTop: '30px', paddingRight: '30px'}}>
        <Highlight
            query={['software development services']}
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
        >
            Started freelance business providing software development services.
        </Highlight>
        
    </Heading>,
]

function Desktop() {
    const [activeNavIndex, setActiveNavIndex] = useState(1)
    return (
        <Grid 
            style={{
                zIndex: '5',
                position: 'absolute',
                color: 'white',
                marginTop: "123px",
                marginLeft: "150px",
                paddingTop: "0",
            }}
            templateColumns='repeat(4,1fr)'
            columnGap={30}
          >
            <GridItem
                colSpan={1}
                rowSpan={3}
            >
                <VStack direction='column' align='center' position='fixed'>
                    <Button as="p" onClick={()=>setActiveNavIndex(1)} fontSize="50px" fontFamily="Calibri" style={{color: `${activeNavIndex === 1 ? 'white' : '#AE8898'}`, cursor: 'pointer', margin: '0.5rem'}}>Apr 2022</Button>
                    <Button as="p" onClick={()=>setActiveNavIndex(2)} fontSize="50px" fontFamily="Calibri" style={{color: `${activeNavIndex === 2 ? 'white' : '#AE8898'}`, cursor: 'pointer', margin: '0.5rem'}}>Jul 2022</Button>
                    <Button as="p" onClick={()=>setActiveNavIndex(3)} fontSize="50px" fontFamily="Calibri" style={{color: `${activeNavIndex === 3 ? 'white' : '#AE8898'}`, cursor: 'pointer', margin: '0.5rem'}}>Oct 2021</Button>
                    <Button as="p" onClick={()=>setActiveNavIndex(4)} fontSize="50px" fontFamily="Calibri" style={{color: `${activeNavIndex === 4 ? 'white' : '#AE8898'}`, cursor: 'pointer', margin: '0.5rem'}}>Jan 2020</Button>
                </VStack>
            </GridItem>
            <GridItem
                colSpan={3}
                rowSpan={2}
            >
                {experienceTextForDesktop[activeNavIndex]}
            </GridItem>
        </Grid>
    );
}

const NonDesktop = () => {
    const [activeNavIndex, setActiveNavIndex] = useState(1)
    return (
        <Grid 
            style={{
                zIndex: '5',
                position: 'absolute',
                color: 'white',
                marginTop: "123px",
                marginLeft: "10px",
                paddingTop: "0",
            }}
            templateColumns='repeat(4,1fr)'
            columnGap={30}
          >
            <GridItem
                colSpan={1}
                rowSpan={3}
            >
                <VStack direction='column' align='center'>
                    <Button as="p" onClick={()=>setActiveNavIndex(1)} fontSize="20px" fontFamily="Calibri" style={{color: `${activeNavIndex === 1 ? 'white' : '#AE8898'}`, cursor: 'pointer', margin: '0.5rem'}}>Apr 2022</Button>
                    <Button as="p" onClick={()=>setActiveNavIndex(2)} fontSize="20px" fontFamily="Calibri" style={{color: `${activeNavIndex === 2 ? 'white' : '#AE8898'}`, cursor: 'pointer', margin: '0.5rem'}}>Jul 2022</Button>
                    <Button as="p" onClick={()=>setActiveNavIndex(3)} fontSize="20px" fontFamily="Calibri" style={{color: `${activeNavIndex === 3 ? 'white' : '#AE8898'}`, cursor: 'pointer', margin: '0.5rem'}}>Oct 2021</Button>
                    <Button as="p" onClick={()=>setActiveNavIndex(4)} fontSize="20px" fontFamily="Calibri" style={{color: `${activeNavIndex === 4 ? 'white' : '#AE8898'}`, cursor: 'pointer', margin: '0.5rem'}}>Jan 2020</Button>
                </VStack>
            </GridItem>
            <GridItem
                colSpan={3}
                rowSpan={2}
            >
                {experienceTextForNonDesktop[activeNavIndex]}
            </GridItem>
        </Grid>
    );
}

const Experience = () => {
    useEffect(()=>{
        document.title = 'Experience | John Patrick Valera | Full Stack Developer'
    })
    var deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const renderExperience = () => {
        return deviceWidth > 1280 ? <Desktop /> : <NonDesktop />
    }
    return renderExperience()
}

export default Experience;