import React from 'react'
import './WhatsappButton.css'

const WhatsappButton = ({
  number='+971588121004',
  message='Hey! I would like to know more information about obtaining DHA license'
}) => {
  const urlEncodedMessage = encodeURIComponent(message);
  return (
    <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
        {/* <a href="https://api.whatsapp.com/send?phone=9911391642&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank"> */}
        <a href={`https://wa.me/${number}?text=${urlEncodedMessage}`} class="float" target="_blank">
            <i class="fa fa-whatsapp my-float"></i>
        </a>
    </div>
  )
}

export default WhatsappButton
