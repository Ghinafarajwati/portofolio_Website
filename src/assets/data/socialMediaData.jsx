import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const socialMedia = [
    {
        id: 1,
        child: (
            <>Linkedin <FontAwesomeIcon icon={faLinkedinIn}/></>
        ),
        href: 'https://www.linkedin.com',
        style: 'rounded-tr-md'
    },
    {
        id: 2,
        child: (
            <>Github <FontAwesomeIcon icon={faGithub}/></>
        ),
        href: 'https://www.linkedin.com',
        style: 'rounded-tr-md'
    },
    {
        id: 3,
        child: (
            <>Email <FontAwesomeIcon icon={faEnvelope}/></>
        ),
        href: 'mailto:farajwati.ghina@gmail.com',
        style: 'rounded-tr-md'
    },
    {
        id: 4,
        child: (
            <>Instagram <FontAwesomeIcon icon={faInstagram}/></>
        ),
        href: 'https://www.linkedin.com',
        style: 'rounded-tr-md'
    },
    {
        id: 5,
        child: (
            <>Resume <FontAwesomeIcon icon={faFile}/></>
        ),
        href: '/resume.pdf',
        style: 'rounded-tr-md',
        download: true
    }
]

export default socialMedia;

