import React from 'react'
import FooterSocial from '../ui/FooterSocial'
import { useTranslation } from '../../hooks/useTranslation';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import './TopHeader.css'

const TopHeader = () => {
    const { t } = useTranslation();
    const content = t.layoutContent.footerContent;
  return (
    <div className='top-header'>
        <div className='social'>
        <FooterSocial isHeader className='social-div'/>
        </div>
        <div className='top-header-div'>
        <div className='top-header-subdiv'>
            <MdEmail size={18} />
            <a href={`mailto:${content.contact.email}`} className="footer-link">
            {content.contact.email}
            </a>
        </div>
        <div className='top-header-subdiv'>
            <MdPhone size={18} />
            <a href={`tel:${content.contact.phone.replace(/\s/g, '')}`} className="footer-link">
            {content.contact.phoneFormatted}
            </a>
        </div>
        </div>
    </div>
  )
}

export default TopHeader
