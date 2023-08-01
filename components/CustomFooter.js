'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function CustomFooter () {
  return (
    <>
      <Container fluid style={{backgroundColor: '#363636', color: '#efede7'}} className='fixed-bottom'>
        <Row className='mt-1'>
          <Col className='text-center'>
            <p className='mb-0'>Contact me:</p>
          </Col>
        </Row>
        <Row className='mb-0'>
          <Col className='text-center'>
            <a href='mailto:michaelzhan2001@gmail.com' style={{color: '#efede7'}} className='mx-2'><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href='linkedin.com/in/michaelzhan1' style={{color: '#efede7'}} className='mx-2'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href='github.com/michaelzhan2' style={{color: '#efede7'}} className='mx-2'><FontAwesomeIcon icon={faGithub} /></a>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <p className='mb-0'>© 2023 Michael Zhan</p>
            <p>Built with Next.js, deployed on Railway</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}