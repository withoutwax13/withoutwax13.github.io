import { Button, Heading, Stack } from '@chakra-ui/react'
import { useEffect } from 'react';

const Desktop = ({setSelection}) => {
    return(
        <Stack style={{
            zIndex: '5',
            position: 'absolute',
            color: 'white',
            marginTop: "123px",
            marginLeft: "185px",
            paddingTop: "0",
          }}>
            <Heading as="h1" fontSize="70px" fontFamily="Calibri" margin="0px" style={{color: "white"}}>I am John Patrick Valera.</Heading>
            <Heading as="h2" fontSize="70px" margin="0px" fontFamily="Calibri" style={{color: "#8591BB"}}>I build web solutions.</Heading>
            <Heading as="h3" fontSize='70px' margin="0px" fontFamily="Calibri" style={{color: "#606A8B"}}>I am a full stack developer.</Heading>
            <Button onClick={()=>setSelection(3)} width="529px" height="51px" backgroundColor="transparent" color="white" style={{cursor: "pointer", borderColor: "white", borderRadius: '5px', borderWidth: "3px", margin: "50px 0"}}>
                <Heading as="h4" fontSize="25px">CHECK MY PORTFOLIO</Heading>
            </Button>
        </Stack>
    );
}

const NonDesktop = ({setSelection}) => {
    return (
        <Stack style={{
            zIndex: '5',
            position: 'absolute',
            color: 'white',
            marginLeft: "20px",
            marginTop: "123px",
            paddingTop: "0",
          }}>
            <Heading as="h1" fontSize="30px" fontFamily="Calibri" margin="0px" style={{color: "white"}}>I am John Patrick Valera.</Heading>
            <Heading as="h2" fontSize="30px" margin="0px" fontFamily="Calibri" style={{color: "#8591BB"}}>I build web solutions.</Heading>
            <Heading as="h3" fontSize='30px' margin="0px" fontFamily="Calibri" style={{color: "#606A8B"}}>I am a full stack developer.</Heading>
            <Button onClick={()=>setSelection(3)} width="200px" height="51px" backgroundColor="transparent" color="white" style={{cursor: "pointer", borderColor: "white", borderRadius: '5px', borderWidth: "3px", margin: "50px 0"}}>
                <Heading as="h4" fontSize="15px">CHECK MY PORTFOLIO</Heading>
            </Button>
        </Stack>
    )
}

const Home = ({setSelection}) => {
    useEffect(()=>{
        document.title = 'John Patrick Valera | Full Stack Developer'
    })
    var deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const renderHome = () => {
        return deviceWidth > 1280 ? <Desktop setSelection={setSelection}/> : <NonDesktop setSelection={setSelection}/>
    }
    return renderHome()
}

export default Home;