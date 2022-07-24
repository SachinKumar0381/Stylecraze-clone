import React from 'react'
import './Protein.css';
import { Heading } from '@chakra-ui/react';

const Protein = () => {
  return (
    <div className='pro'>
        <Heading width="50%" margin="auto">Protein Calculator – How To Calculate Protein Intake</Heading>
        <h1>Protein is an important nutrient for bodily functions. This calculator helps to determine your total protein intake as per your calorie requirement, age, and physical activity which is important to meet the demand and help to regulate satiety level.</h1>
        <div className='table'>
        <iframe id="sc-protiene_intake_cal" width=" 500" height="560" allowtransparency="true" src="https://www.stylecraze.com/tools/protein-intake-calculator/?embed_id=1" frameborder="0" allowfullscreen=""></iframe> 
        </div>
        <h1>Proteins are the building blocks and are made up of amino acids. Our muscles, skin, bones, tendons, enzymes, digestive juices all are made of protein. Besides supporting growth and development, proteins also provide 4 calories of energy (through oxidation of 1 g of protein).</h1>
        <h1>The amount of protein required depends on the age, sex, and physical activity of the person. The current International Recommended Dietary Allowance (RDA) for protein is 0.8 g/kg body weight, irrespective of age (1). This is subject to change based on physical activity and needs to be distributed as nearly 25-30 g of high-quality protein in every meal (considering 3 meals) (1).</h1>
    </div>
  )
}

export default Protein