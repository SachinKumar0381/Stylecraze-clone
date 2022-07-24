import React from 'react'
import './Ideal.css';
import { Heading } from '@chakra-ui/react';

const Ideal = () => {
  return (
    <div className='pro'>
        <Heading width="50%" margin="auto">Body Surface Area BSA Calculator For Medicinal Purposes</Heading>
        <h1>This calculator measures the total surface area of the body to determine the dosage of drugs or the amount of fluids. This measurement is used for medicinal purposes only.</h1>
        <div className='table'>
        <iframe id="sc-ideal_body_weight_cal" width=" 500" height="555" allowtransparency="true" src="https://www.stylecraze.com/tools/ideal-body-weight-calculator/?embed_id=1" frameborder="0" allowfullscreen=""></iframe> 
        </div>
        <h1>Proteins are the building blocks and are made up of amino acids. Our muscles, skin, bones, tendons, enzymes, digestive juices all are made of protein. Besides supporting growth and development, proteins also provide 4 calories of energy (through oxidation of 1 g of protein).</h1>
        <h1>The amount of protein required depends on the age, sex, and physical activity of the person. The current International Recommended Dietary Allowance (RDA) for protein is 0.8 g/kg body weight, irrespective of age (1). This is subject to change based on physical activity and needs to be distributed as nearly 25-30 g of high-quality protein in every meal (considering 3 meals) (1).</h1>
    </div>
  )
}

export default Ideal