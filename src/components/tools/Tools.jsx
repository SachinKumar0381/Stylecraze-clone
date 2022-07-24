import { Heading } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Tools.css'

const Tools = () => {
    let navig=useNavigate();
  return (
    <div>
        <div className='head'>
            <Heading textAlign="initial">Calculators</Heading>
            <h1>A calculator is a type of software, which is used to calculate various scores and indices. The main purpose of incorporating it in many verticals is that it allows easy calculation.</h1>
        </div>
        <div className='tool'>
            <div onClick={()=>navig('/protein')}>
                <Heading size='md'>Protein Calculator – How To Calculate Protein Intake</Heading>
                <h1>
Protein Calculator helps you to estimate the amount of dietary protein required for an adult to stay healthy. The calculator is useful for monitoring protein intake for children, pregnant women and those who are suffering from kidney and liver disease.</h1>
                 <p className='read'>- Read more</p>
            </div>
            <div onClick={()=>navig("/bsa")}>
                <Heading size="md">Ideal Body Weight (IBW) Calculator</Heading>
                <h1>Determine your ideal body weight using Body Weight Calculator by considering factors like gender, age, and height. Checkout out your ideal weight and possible risks associated with it.</h1>
                <p className='read'>- Read more</p>
            </div>
            <div onClick={()=>navig("/ideal")}>
                <Heading size="md">Body Surface Area BSA Calculator For Medicinal Purposes</Heading>
                <h1>Body Surface Area Calculator is used to calculate your body surface area (BSA). It is used for clinical purposes such as determining cardiac index, dosages for chemotherapy. The results are obtained based on several metric formulas.</h1>
                <p className='read'>- Read more</p>
            </div>
            <div>
                <Heading size='md'>BMI Calculator – Check Your Body Mass Index For Women & Men</Heading>
                <h1>Checkout your body mass either you are lean or fat using this BMI calculator. BMI Calculator determines whether you are in a healthy zone or not. There are several factors involved in calculating BMI such as age, height, and weight.</h1>
                <p className='read'>- Read more</p>
            </div>
            <div>
                <Heading size="md">Basal Metabolic Rate BMR Calculator To Count Minimum Calories</Heading>
                <h1>Know your body mass ratio using the BMR calculator and check out the calorie intake to build your body mass. Follow the proper diet based on the results obtained.</h1>
                <p className='read'>- Read more</p>
            </div>
            <div>
                <Heading size='md'>Age Calculator – Calculate Your Age In Various Stage Of Life</Heading>
                <h1>The age calculator is used to determine the interval between the specified two days. The age calculated can be displayed in various forms (Days, months, years and weeks). This calculator is based on the most common age system.</h1>
                <p className='read'>- Read more</p>
            </div>
            <div>
                <Heading size='md'>Determine CKD With GFR Calculator (Glomerular Filtration Rate)</Heading>
                <h1>
GFR calculator is the best tool to index your kidney function. It is used to calculate your glomerular filtration rate (GFR) by taking a few parameters such as age, sex, and body size.</h1>
<p className='read'>- Read more</p>
            </div>
        </div>
    </div>
  )
}

export default Tools