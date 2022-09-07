import React,{useEffect,useState} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
    const [loopNum,setLoopNum]=useState(0)
    const [isDeleting,setIsDeleting]=useState(false)
    const toRotate=["Web Developer","Web Designer", "UI/UX Designer"]
    const [text,setText]=useState('')
    //it determines how fast one letter comes after the other not more than 300
    const [delta,setDelta]=useState(300-Math.random()*100)
    //how much time passes one extra letter being typed out transition between two words
    const period=2000

    //function responsible for typing or deleting
    useEffect(()=>{
        //set Interval function calls function at specified intervals(in milliseconds)
        let ticker=setInterval(()=>{
            tick()
        },delta)
        //it will clear interval every time the text gets updated
        return()=>{clearInterval(ticker)}
    },[text])

    const tick=()=>{
        // keeping i limited to only number of text elements inside the array 
        let i=loopNum % toRotate.length;
        //keeping track of the element at which we are at
        let fullText=toRotate[i]
        //future text to be updated
        let updatedText=isDeleting? fullText.substring(0,text.length-1) : fullText.substring(0,text.length +1)

        //updating state
        setText(updatedText)
        //if it is deleting then we will update delta
        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }
        //if we are not deleting and we are at point where updated text is full text and set delta to normal pace
        if(!isDeleting && updatedText ===fullText){
            setIsDeleting(true)
            setDelta(period)
        }
        // if it is deletign and updated text is deleted then set loop to next element
        else if(isDeleting && updatedText===''){
            setIsDeleting(false)
            setLoopNum(loopNum+1)
            setDelta(500)
        }
    }
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome To My Portfolio</span>
                    <h1>{`Hi I am  Sexy Mudit `}<span className='wrap'> {text}</span></h1>
                    <p>Hi, My name is Mudit Kapoor .I am a student at Chandigarh University and I am not a terrorist</p>
                    <button onClick={()=>console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}
