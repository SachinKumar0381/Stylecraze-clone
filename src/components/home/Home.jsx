import React from 'react';
import './Home.css';
import {Heading} from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
        <div className='first-image'>
            <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/03/How-To-Style-Converse-Shoes-With-Dresses--17-Outfit-Ideas-1.jpg.webp" alt="" />
            <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/03/27-Cute-Summer-Date-Ideas-To-Explore-With-Your-Loved-One.jpg.webp" alt="" />
            <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/03/A-Complete-History-Of-Lipsticks.jpg.webp" alt="" />
        </div>
        <div className='facebook'>
        <div class="box">
        <div class="trapezoid fb">
        <h2>FACEBOOK</h2>
        </div>
        <h2 className='fbh'>8M Followers</h2>
        </div>

        <div class="box">
       <div class="trapezoid pint">
       <h2>PINTEREST</h2>
       </div>
       <h2 className='pinth'>1M Followers</h2>
       </div>

       <div class="box">
       <div class="trapezoid insta">
       <h2>INSTAGRAM</h2>
       </div>
       <h2 className='instah'>760K Followerss</h2>
       </div>
        </div>
        <Heading marginTop="100px">MAKEUP</Heading>
        <div className='sec-image'>
            <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/02/How-To-Do-French-Makeup-2.jpg.webp" alt="" />
           <div className='head'> <h1>How To Do French Makeup</h1>
            <p>French makeup is a rage among beauty enthusiasts as it offers an effortlessly flawless and elegant look. The reason is Parisian women do not really seek a perfect transformative look. Their makeup is all about highlighting and enhancing their natural […]</p></div>
        </div>

        <div className='third'>
            <div>
                <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/02/7-Different-Nail-Shapes-And-How-To-Achieve-Them.jpg.webp" alt="" />
                <h1 className='header'>7 Different Nail Shapes And How To Achieve Them</h1>
            </div>
            <div>
                <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/02/How-To-Choose-The-Right-Concealer--Tips-On-Shades-And-Formulas.jpg.webp" alt="" />
                <h1 className='header'>How To Choose The Right Concealer – Tips On Shades</h1>
            </div>
            <div>
                <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/02/Simple-Gold-Eye-Makeup-Tutorial.jpg.webp" alt="" />
                <h1 className='header'>Simple Gold Eye Makeup Tutorial</h1>
            </div>
        </div>
        <Heading marginTop="100px" >HAIR STYLE</Heading>
        <div className='sec-image'>
            <img className='image' src="https://cdn2.stylecraze.com/wp-content/uploads/2015/06/How-To-Wrap-Hair-In-A-Scarf--25-Awesome-Ways-To-Style.jpg.webp" alt="" />
           <div className='head'> <h1>How To Wrap Hair In A Scarf – 25 Awesome Ways To Style</h1>
            <p>French makeup is a rage among beauty enthusiasts as it offers an effortlessly flawless and elegant look. The reason is Parisian women do not really seek a perfect transformative look. Their makeup is all about highlighting and enhancing their natural […]</p></div>
        </div>

        <div className='third'>
            <div>
                <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/06/40-Best-Ombre-Hair-Color-Ideas-And-Styles-To-Try-In-2022.jpg.webp" alt="" />
                <h1 className='header'>7 Different Nail Shapes And How To Achieve Them</h1>
            </div>
            <div>
                <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/06/5-Trendy-Hairstyles-For-Different-Face-Shapes.jpg.webp" alt="" />
                <h1 className='header'>How To Choose The Right Concealer – Tips On Shades</h1>
            </div>
            <div>
                <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/06/50-Fabulous-Messy-Hairstyles-For-Women-To-Try.jpg.webp" alt="" />
                <h1 className='header'>Simple Gold Eye Makeup Tutorial</h1>
            </div>
        </div>
        <Heading marginTop="100px">HEALTH & WELLNESS</Heading>
        <div className='sec-image'>
            <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/12/21-Best-Weight-Loss-Smoothie-Recipes-To-Help-You-Lose-Fat.jpg.webp" alt="" />
           <div className='head'> <h1>How To Do French Makeup</h1>
            <p>French makeup is a rage among beauty enthusiasts as it offers an effortlessly flawless and elegant look. The reason is Parisian women do not really seek a perfect transformative look. Their makeup is all about highlighting and enhancing their natural […]</p></div>
        </div>

        <div className='third'>
            <div>
                <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/12/11-Best-Foods-To-Help-Children-Grow-Taller.jpg.webp" alt="" />
                <h1 className='header'>7 Different Nail Shapes And How To Achieve Them</h1>
            </div>
            <div>
                <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/12/15-Arm-Workouts-Without-Weights-To-Lose-Arm-Fat-Fast-At-Home.jpg.webp" alt="" />
                <h1 className='header'>How To Choose The Right Concealer – Tips On Shades</h1>
            </div>
            <div>
                <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/11/Do-Home-Remedies-For-Carpal-Tunnel-Really-Have-Any-Effect.jpg.webp" alt="" />
                <h1 className='header'>Simple Gold Eye Makeup Tutorial</h1>
            </div>
        </div>
    </div>
  )
}

export default Home