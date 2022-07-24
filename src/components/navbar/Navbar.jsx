import React from 'react'
import './Navbar.css';
import {Input, InputRightElement, InputGroup, Button} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    let navig=useNavigate();

  return (
    <div className='navbar'>
    <div style={{border : "1px solid black"}}>
        <div className='search'>
        <img onClick={()=>{navig("/")}} src="https://cdn2.stylecraze.com/wp-content/themes/buddyboss-child/images/sc-logo.png" alt="" />
        <div>
        <InputGroup size='sm' width="150px" >
      <Input
        pr='4.5rem'
        type="text"
        placeholder='Search'
        borderRadius="20px"
      />
      <InputRightElement width='4.5rem'>
      <SearchIcon/>
      </InputRightElement>
    </InputGroup>
        </div>
        </div>
        <div className='menu'>
        <div className='dropdown'><h1>MAKEUP</h1>
        <div className="dropdown-content">
            <div className='subh'>
                <h1 className='dropdown'>Bridal Makeup
                <div className='dropdown-content drop2'>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/03/41-Top-5-Keya-Seth%E2%80%99s-Bridal-Makeup-Packages-267x300.jpg.webp" alt="" />
                    <p>Top 5 Keya Seth’s Bridal Makeup Packages</p>
                    </div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/1150-60-Best-Indian-Bridal-Makeup-Tips-267x300.jpg.webp" alt="" /><p>60 Best Indian Bridal Makeup Tips And Ideas</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/09/How-To-Plan-A-Pre-Wedding-Skin-Care-Regimen-Banner-267x300.jpg.webp" alt="" /><p>How To Plan A Pre-Wedding Skin Care Regimen</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/09/1300-Best-Bridal-Makeup-Kits-Available-In-India-Our-Top-10-ss-267x300.jpg.webp" alt="" /><p>10 Best Bridal Makeup Kits Available In India</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/How-To-Apply-Bridal-Eye-Makeup-Perfectly-1-267x300.jpg.webp" alt="" /><p>How To Apply Bridal Eye Makeup – Step-By-Step Tutorial</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/06/Nigerian-Bridal-Makeup-%E2%80%93-A-Simple-Stepwise-Tutorial-267x300.jpg.webp" alt="" /><p>Nigerian Bridal Makeup – A Simple Stepwise Tutorial </p></div>
                </div>
                </h1>
                <h1 className='dropdown'>Celebrity Makeup
                <div className='dropdown-content drop2'>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/02/2104-Top-10-International-Makeup-Artists-1-267x300.jpg.webp" alt="" /><p>Top 10 International Makeup Artists</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/03/1726_CAUGHT-10-Pictures-Of-Alia-Bhatt-Without-Makeup-267x300.jpg.webp" alt="" /><p>CAUGHT! 10 Pictures Of Alia Bhatt Without Makeup</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/12/1352_10-Pictures-Of-Anushka-Shetty-Without-Makeup_Anushka-Shetty-Gorgeous-Face-Close-Up-Stills.jpg_1-267x300.jpg.webp" alt="" /><p>CAUGHT! 10 Pictures Of Alia Bhatt Without Makeup</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/1136-Deepika-Padukone-Without-Makeup-267x300.jpg.webp" alt="" /><p>CAUGHT! 10 Pictures Of Alia Bhatt Without Makeup</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/15-Pictures-Of-Aishwarya-Rai-Without-Makeup-1-267x300.jpg.webp" alt="" /><p>CAUGHT! 10 Pictures Of Alia Bhatt Without Makeup</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/02/2051-Celebrities-With-Tattooed-Eyebrows-267x300.jpg.webp" alt="" /><p>CAUGHT! 10 Pictures Of Alia Bhatt Without Makeup</p></div>
                </div>
                </h1>
                <h1 className='dropdown'>Eye Makeup
                <div className='dropdown-content drop2'>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/03/2177-Eye-Makeup-Tips-For-Close-Set-Eyes-ss-267x300.jpg.webp" alt="" /><p>CAUGHT! 10 Pictures Of Alia Bhatt Without Makeup</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/10/5-Perfect-Eyebrow-Shapes-For-Diamond-Shaped-Face-2-267x300.jpg.webp" alt="" /><p>CAUGHT! 10 Pictures Of Alia Bhatt Without Makeup</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/02/How-To-Apply-Blue-Eyeliner-267x300.jpg.webp" alt="" /><p>CAUGHT! 10 Pictures Of Alia Bhatt Without Makeup</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/02/755_shutterstock_99557942.jpg_1-267x300.jpg.webp" alt="" /><p>CAUGHT! 10 Pictures Of Alia Bhatt Without Makeup</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/03/Different-Types-Of-Mascaras-1-267x300.jpg.webp" alt="" /><p>CAUGHT! 10 Pictures Of Alia Bhatt Without Makeup</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/2427-Simple-Steps-To-Apply-Eye-Makeup-For-Wide-Set-Eyes-ss-267x300.jpg.webp" alt="" /><p>CAUGHT! 10 Pictures Of Alia Bhatt Without Makeup</p></div>
                </div>
                </h1>
                <h1 className='dropdown'>Face Makeup
                <div className='dropdown-content drop2'>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2018/10/Best-BB-Creams-For-Oily-And-Acne-Prone-Skin-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/How-To-Apply-Makeup-For-Oily-Skin-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/08/3197-What-Is-A-Tinted-Moisturizer-And-What-Are-Its-Benefits-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/1081-best-lakme-concealers-300x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/6-Best-Concealers-For-Dry-Skin-Available-In-India-267x300.png.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/10/15-Best-Waterproof-Foundations-For-Women-In-India-3-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                </div>
                </h1>
                <h1 className='dropdown'>Lip Make
                <div className='dropdown-content drop2'>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/09/12-Best-Liquid-Lipsticks-Available-In-India-267x300.png.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/07/3041-How-To-Prevent-Lipstick-From-Smudging-ss-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/02/1672-How-To-Get-Hot-Ombre-Lips-ss-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/09/2915-Must-Have-Lipstick-Shades-ss-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                    <div> <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Best-Orange-Lipsticks-Available-In-India-%E2%80%93-Our-Top-10-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                    <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/03/2921-Why-Do-You-Need-A-Lip-Brush-ss-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                </div>
                </h1>
                <h1 className='dropdown'>Makeup Idea
                <div className='dropdown-content drop2'>
                <div> <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/1351-Top-10-Kryolan-Makeup-Kits-Available-In-India-is-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/07/How-To-Choose-The-Right-Hair-Color-For-Olive-Skin-And-Brown-Eyes-1-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/09/908-8-Ways-To-Get-Rid-Of-Permanent-Tattoos-1-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/10/How-To-Make-Pores-Smaller-With-Makeup-%E2%80%93-Tutorial-And-Tips-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                <div> <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/08/2864-Best-Chambor-Products-Available-In-India-%E2%80%93-Our-Top-10-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/1139-Best-Makeup-Products-For-Oily-Skin-%E2%80%93-Our-Top-18-1-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                </div>
                </h1>
                <h1 className='dropdown'>Mehandi Design
                <div className='dropdown-content drop2'>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/04/28-iStock-535025923-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                <div>   <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/05/6322_10-Best-Back-Hand-Mehndi-Designs-For-Any-Occasion-300x140.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/04/12-iStock-528891563-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/04/Best-Mehndi-Henna-Kits-%E2%80%93-Our-Top-5-300x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                <div> <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/02/How-To-Make-Mehendi-Darker-And-Long-Lasting-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                <div> <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/01/2800-10-Most-Loved-Heart-Henna-Designs-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                </div>
                </h1>
                <h1 className='dropdown'>Nail Art
                <div className='dropdown-content drop2'>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/05/10-Best-Nail-Polish-Shades-For-Fair-Skin-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/09/Best-Nail-Polish-Colors-For-Olive-Tan-Light-Medium-Skins-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/05/How-To-Do-French-Manicure-At-Home-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/02/1032-Best-Indian-Nail-Polish-Brands-%E2%80%93-Our-Top-10-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/05/Best-Elle-18-Nail-Polish-Shades-And-Swatches-%E2%80%93-Our-Top-10-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/02/How-To-Do-Ombre-Nails-Easily-At-Home-And-5-Design-Ideas-267x300.jpg.webp" alt="" /><p>5 Perfect Eyebrow Shapes For Diamond Shaped Face</p></div>
                </div>
                </h1>
                <Button onClick={()=>{navig('/bridal')}}>Find more</Button>
            </div>

        </div>
        </div>
         <div className='dropdown'><h1>HAIR CARE</h1>
         <div className='dropdown-content'>
        <div className='subh'>
        <h1 className='dropdown'>Basic Hair Care
                <div className='dropdown-content drop2'>
                   <div> <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/05/How-To-Make-Brown-Sugar-Scrub-For-Scalp-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                   <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/07/3507-Greasy-Scalp-and-Brittle-Ends-How-to-Treat-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                   <div> <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/3159_How-To-Take-Proper-Care-Of-Your-Hair_iS-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                   <div> <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/02/13-Top-Winter-Hair-Care-Tips-For-Healthy-Locks-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                   <div> <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/Permanent-Hair-Straightening-Everything-You-Need-To-Know-Banner-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                   <div><img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/08/Ultra-Shiny-And-Glossy-Hair-Secrets-No-One-Tells-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                </div>
                </h1>
                <h1 className='dropdown'>Dandruff
                <div className='dropdown-content drop2'>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/08/Common-Questions-On-Dandruff-Answered-By-Experts-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>   <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/Top-12-Anti-Dandruff-Conditioners-Available-In-India-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/1012-How-To-Use-Coconut-Oil-For-Dandruff-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/1539_How-To-Use-Olive-Oil-To-Treat-Dandruff_253044214-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>   <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/How-To-Get-Rid-Of-Dandruff-In-Winter-Naturally-Banner-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>   <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/11/How-To-Use-Neem-To-Cure-Dandruff-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                </div>
                </h1>
                <h1 className='dropdown'>Dry Hair Care
                <div className='dropdown-content drop2'>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/01/186-dry-hair-treatments-from-your-kitchen_124515046-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/01/8-Best-Salon-Treatments-For-Dry-Hair-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>   <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/How-To-Keep-Your-Hair-Healthy--20-Tips-Home-Remedies-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/15-Best-Shampoos-For-Frizzy-Hair-Available-In-India-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/10-Best-Hair-Masks-Available-In-India-For-Dry-Frizzy-Hair-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div> <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/Top-20-Shampoos-For-Dry-And-Damaged-Hair-Best-Products-Of-2017-1-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                </div>
                </h1>
                <h1 className='dropdown'>Hair Care Ideas
                <div className='dropdown-content drop2'>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/03/10-Best-Hypoallergenic-Shampoos-For-Sensitive-Skin-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/09/15-Best-Shampoos-For-Curly-Hair-To-Buy-In-2019-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/10/3196-12-Amazing-Benefits-Of-Hair-Texture-Powder-ss-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/02/2552-10-Best-Hair-Perfumes-Available-In-India-1-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/09/1671-Best-Matrix-Hair-Straightening-Products-Available-In-India-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/09/2495-Best-Ayurvedic-Hair-Care-Products-%E2%80%93-Our-Top-10-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                </div>
                </h1>
                <h1 className='dropdown'>Hair Care Solution
                <div className='dropdown-content drop2'>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/10/5-Effective-Home-Remedies-To-Treat-Grey-Hair-In-Kids-2-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/10-Best-DIY-Banana-Hair-Masks-For-All-Hair-Types-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/02/The-Best-Ways-To-Straighten-Your-Hair-At-Home-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>   <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/05/How-to-Get-Silky-and-Bouncy-Hair-in-Summer-1-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>   <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/02/Trouble-Managing-Curly-Hair-These-7-Home-Remedies-Will-Make-Your-Job-Damn-Easy-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>   <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/09/Olive-Oil-As-Grey-Hair-Remedy-Fact-Or-A-Myth-1-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                </div>
                </h1>
                <h1 className='dropdown'>Hair Colour
                <div className='dropdown-content drop2'>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2018/01/Top-10-Semi-Permanent-Hair-Colors-%E2%80%93-2018-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/08/15-Stunning-Hair-Color-Shades-To-Cover-Grey-Hair-In-2021-1-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/02/Vegetal-Hair-Dye-%E2%80%93-What-Is-It-And-Why-To-Use-It-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>   <img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/10/25-Mesmerizing-Mermaid-Hair-Color-Ideas-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>   <img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/10/20-Radical-Styling-Ideas-For-Your-Red-Ombre-Hair-240x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div> <img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/10/20-Breathtaking-Purple-Ombre-Hair-Color-Ideas-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                </div>
                </h1>
                <h1 className='dropdown'>Hair Fall
                <div className='dropdown-content drop2'>
                <div>   <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/7-Yoga-Poses-That-Can-Protect-Your-Hair-3-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>   <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/723-397195030-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/06/How-To-Use-Garlic-Shampoo-For-Hair-Loss-2-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/1298-How-To-Use-Almond-Oil-To-Help-Control-Hair-Loss-iStock-513680834-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>   <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/05/236-effective-hair-masks-to-treat-hair-loss_170783870-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>   <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/Supplements-To-Prevent-Hair-Loss-And-Help-Hair-Growth-%E2%80%93-Our-Top-10-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                </div>
                </h1>
                <h1 className='dropdown'>Hair Growth
                <div className='dropdown-content drop2'>
                <div> <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/3752-Laser-Treatment-For-Hair-Growth-ss-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/904-11-Tips-To-Grow-Your-Hair-Back-With-The-Right-Diet-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/Top-10-Exercises-For-Hair-Growth-1-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/02/560_How-To-Use-Shikakai-For-Hair-Growth_shutterstock_530535151-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>  <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/01/1204_Does-Castor-Oil-Help-Treat-Baldness_557050852.jpg_1-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                <div>   <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/How-To-Use-Spinach-For-Hair-Growth-3-267x300.jpg.webp" alt="" /><p>Top 12 Anti-Dandruff Conditioners Available In India</p></div>
                </div>
                </h1>
                <Button onClick={()=>{navig("/dandruff")}}>Find more</Button>
        </div>
         </div>
         </div>
         <div className='dropdown'><h1>SKIN CARE</h1>
         <div className='dropdown-content'>
            <div className='subh'>
            <h1 className='dropdown'>Acne
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/02/How-To-Use-Rose-Water-For-Acne-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/02/1316-8-Most-Popular-Shahnaz-Husain%E2%80%99s-Beauty-Tips-For-Pimples-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/11/7-Simple-Ways-To-Use-Hydrogen-Peroxide-To-Treat-Acne-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/08/10-Easy-Ways-To-Use-Mint-Leaves-To-Get-Rid-Of-Acne-Scars-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2018/11/Using-Ice-On-Pimples-And-Acne-%E2%80%93-Is-It-Effective-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/11/7-Simple-Ways-To-Use-Banana-Peel-To-Treat-Acne-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Anti Ageing
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/02/How-To-Prevent-Neck-Wrinkles-3-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/04/12-Best-Skin-Tightening-Creams-for-2019-in-India-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/11/15-Best-Anti-Aging-Herbs-For-Youthful-Skin.-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/06/1281-How-To-Get-Rid-Of-Wrinkles-Using-Coconut-Oil-shutterstock_245568388-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/04/7-Best-Ayurvedic-Medicines-To-Fight-Aging-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/03/Best-Facial-Firming-Creams-%E2%80%93-My-Top-10-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Beauty Secret
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Top-10-Most-Beautiful-Japanese-Women-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/124-ZOYs-fyfzhap4407836-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/1048-Top-10-Most-Beautiful-Ukranian-Women-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/2745_Karishma-Kapoor%E2%80%99s-Makeup-Beauty-And-Fitness-Secrets-Revealed-3-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/08/Shilpa-Shetty%E2%80%99s-Makeup-And-Beauty-Secrets-Revealed-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/09/1096_6-Best-Kept-Chinese-Beauty-Secrets-That-You-Can-Follow-Too_81709624.jpg_1-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Dry Skin
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/07/How-To-Take-Care-Of-Dry-Skin-15-Best-Tips-To-Seal-Moisture-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/06/How-To-Remove-Dead-Skin-From-Feet-Banner-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/15-Best-Skin-Care-Products-For-Dry-Skin-%E2%80%93-Our-Top-Picks-For-2019-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/09/How-To-Use-Multani-Mitti-For-Dry-Skin-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/20-5-Simple-Homemade-Scrubs-For-Dry-Skin-ss-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/12/13-Best-Ways-To-Use-Honey-For-Dry-Skin-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Fair Care Tips
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/10-Best-Ayurvedic-Remedies-To-Reduce-Acne-At-Home-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/356_2-Simple-Pimple-Treatments-For-Oily-Skin_107449433.jpg_1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/07/974_512776246-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/07/Castor-Oil-For-Face-Benefits-Risks-And-How-To-Use-It-Banner-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/1043-20-Homemade-Face-Packs-With-Honey-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/09/9-Effective-Ways-To-Remove-White-Facial-Hair-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Facepack and Mask
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/11/1395_2-Simple-Ways-To-Prepare-Beetroot-Face-Packs_81157033.jpg_1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/02/12-Orange-Face-Packs-That-You-Definitely-Need-To-Try-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/10/11-Simple-Homemade-Oatmeal-Face-Packs-With-Pictures-2-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/07/How-To-Make-A-Lemon-And-Baking-Soda-Face-Mask-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/2464_3-Effective-Homemade-Face-Packs-For-Clear-Skin_ss-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/5-Effective-Almond-Face-Packs-That-You-Can-Try-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Glowing Skin
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/01/177-masks-for-glowing-skin_139056572-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/05/320-675965096-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/07/2269-Glutathione-For-Skin-Whitening-ss-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/08/21-Best-Fruit-And-Vegetable-Juices-For-Healthy-And-Glowing-Skin-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/851_Top-10-Methods-To-Get-Instant-Fairness391498855-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/283-Top-20-Fruits-For-Spotless-Glowing-Acne-Free-And-Even-Toned-Skin-595083749-1-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Homemade Tips
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/2464_3-Effective-Homemade-Face-Packs-For-Clear-Skin_ss-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/08/1469-DIY-5-Easy-Steps-To-Make-Eye-Liner-From-Your-Eye-Shadow-is-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/20-Extremely-Effective-Homemade-Scrubs-For-Oily-Skin-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/08/DIY-Cinnamon-Lip-Plumper-%E2%80%93-15-Simple-Recipes-To-Get-Fuller-and-Beautiful-Lips-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/07/2145_How-To-Use-Hydrogen-Peroxide-To-Remove-Blackheads_iStock_000037693154-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/12-Green-Tea-Face-Packs-For-Different-Skin-Types-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <Button onClick={()=>{navig('/skin')}}>Find more</Button>
            </div>
         </div>
         </div>
         <div className='dropdown'><h1>HAIRSTYLES</h1>
         <div className='dropdown-content'>
            <div className='subh'>
            <h1 className='dropdown'>Bob Hairstyles
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/01/50-Most-Popular-Bob-Shaped-Hairstyles-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/01/20-Stunning-Bob-Haircuts-With-Bangs-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/05/Chic-Feathered-Hairstyles-Banner-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/03/10-Stylish-Bob-Hairstyles-For-Oval-Faces-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/19-Most-Popular-Bob-Hairstyles-2-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/01/Latest-And-Most-Popular-Messy-Bob-Hairstyles-For-Women-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Bread Hairstyles
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/145-Lace-Braid-Picture-Guide-%E2%80%93-A-Step-By-Step-Tutorial-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/05/20-Uniquely-Beautiful-Braided-Hairstyles-For-Girls-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/02/76-4-Indian-Braid-Hairstyles-That-You-Can-Try-Too-is-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/03/20-Beautiful-Braided-Updos-For-Black-Women-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/09/45-Stunningly-Easy-Braid-Hairstyles-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/11/50-20-Braids-For-Little-Girls-ss-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Bridal Hairstyles
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/03/10-New-Bridal-Hairstyles-To-Try-Today-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/20-Best-Hairstyles-For-Brides-With-Round-Face-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/09/50-Best-Hairstyles-of-This-Wedding-Season-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/50-Bridal-Styles-For-Long-Hair-2-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/1468-10-Beautiful-South-Indian-Hairstyles-For-Girls-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/66-50-Bridal-Hairstyle-Ideas-For-Your-Reception-ss-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Bun Hairstyles
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/50-Stunning-Bun-Hairstyles-You-Need-To-Check-Out-Now-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/1720_How-To-Do-A-Donut-Bun-%E2%80%93-Pictorial_iS-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/03/709-96576631-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/03/Best-Messy-Bun-Hairstyles-%E2%80%93-Our-Top-10-2-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/10-Easy-DIY-Top-Knot-Tutorials-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/1720_How-To-Do-A-Donut-Bun-%E2%80%93-Pictorial_iS-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Celebrity Hairstyles
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/30-How-Do-Celebrities-With-Diamond-Face-Shape-Style-Their-Hair-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/06/Top-10-Aishwarya-Rai-Hairstyles-Through-The-Years-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/03/10-Sexy-Victoria-Beckham%E2%80%99s-Bob-Hairstyles-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/50-Celebrity-Hairstyles-For-Women-Over-50-2-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/Taylor-Swift-Hairstyles-To-Inspire-You-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/04/68-8-Indian-Celebrities-And-Their-Favourite-Hairstyles--267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Curley Hairstyles
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/94-How-To-Get-Curly-Hair-Overnight-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/02/20-Simple-Curly-Hairstyles-For-Women-Over-40-3-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/20-Amazing-Hairstyles-For-Curly-Hair-For-Girls-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/02/40-Best-Short-Curly-Hairstyles-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/5-Curly-Ponytail-Ideas-That-You-Should-Try-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/1147-20-Amazing-Layered-Hairstyles-For-Curly-Hair-1-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Different Hairstyles
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/2738_Top-50-Emo-Hairstyles-For-Girls_Ss-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/920-50-Korean-Hairstyles-that-You-Can-Try-Right-Now-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/Best-Retro-Hairstyles-Our-Top-10-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/1065_20-Divine-Hairstyles-To-Complement-Your-Saree_669335830.jpg_1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/20-Best-Hairstyles-For-Brides-With-Round-Face-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/20-Amazing-Hairstyles-For-Curly-Hair-For-Girls-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Hairstyle Trends
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/06/41-Cute-And-Chic-Cornrow-Braids-Hairstyles-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/02/40-Ombre-Hair-Color-And-Style-Ideas-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/06/25-Incredible-Ways-To-Style-Your-Hair-With-A-Scarf-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/05/31-Incredible-Half-Up-Half-Down-Prom-Hairstyles-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/05/111-10-Trendy-Faux-Hawk-Hairstyles-You-Can-Try-Today-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/02/50-Simple-Office-Hairstyles-For-Women-1-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <Button>Find more</Button>
            </div>
         </div>
         </div>
         <div className='dropdown'><h1>HEALTH & WELLNESS</h1>
         <div className='dropdown-content'>
            <div className='subh'>
            <h1 className='dropdown'>Fitness
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2020/04/The-10-Best-Doorway-Pull-Up-Bars-Of-2020-Banner-SC-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2020/09/The-15-Best-Womens-Workout-Shorts-In-2020--Reviews-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/01/15-Easy-Brain-Gym-Exercises-To-Improve-Focus-And-Memory-Banner-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/11/10-Best-Smart-Weighted-Hula-Hoops-For-A-Fun-Workout-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/09/18-Amazing-Benefits-Of-Silva-Method-Meditation-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2018/05/Components-Of-Fitness-259x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Health Devices
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/03/10-Best-Cavitation-Machines-For-Fat-Burning-And-Body-Sculpting-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/10/11-Best-Infrared-Massagers-For-Sweet-Relief-From-Aches-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/11/Vitamin-D-Benefits-And-Risks-Of-Deficiency-banner-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2020/08/The-Top-12-Pulse-Oximeters-In-India--2020-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/08/Top-10-Energy-Drinks-Available-In-India--With-Reviews-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/10/Choline-Rich-Foods-Why-You-Should-Add-Them-To-Your-Diet-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Ayurveda
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2016/06/83-10-Benefits-Of-Drinking-Water-On-An-Empty-Stomach-ss-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2016/05/Is-Drinking-Cold-Water-Bad-For-You-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2016/08/Digestion-Problem-In-Babies-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2016/07/How-To-Maintain-Your-Oral-Hygiene-The-Ayurvedic-Way-ss-259x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2016/08/5-Key-Things-You-Must-Do-After-Eating-High-Cholesterol-Food-ss-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2016/07/16-Hot-Water-Bath-Vs-Cold-Water-Bath-ss-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Diet Tips
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/09/Body-Composition-Exercise-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/08/23-Delicious-Keto-Friendly-Snacks-You-Can-Eat-Banner-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/Diet-For-Dry-Skin-15-Best-Foods-That-Lock-Moisture-Naturally-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/904-11-Tips-To-Grow-Your-Hair-Back-With-The-Right-Diet-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/09/7-Best-Yoga-Poses-To-Relieve-Chest-Pain-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2018/08/10-Best-Pilates-Reformer-Exercises-And-Benefits-For-A-Fit-Body-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Healthy Foods
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/04/Top-25-Healthy-Mushroom-Recipes-You-Must-Try-2-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/11/Diet-For-Dry-Skin-15-Best-Foods-That-Lock-Moisture-Naturally-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/Healthy-Sources-Of-Fat-For-Vegetarians-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/02/1762-What-Foods-To-Eat-And-What-Foods-To-Avoid-During-Pregnancy-ss-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/04/Are-Digestive-Biscuits-Good-For-Health-2-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/06/Earl-Grey-Tea-Caffeine-Is-It-Safe-During-Pregnancy-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Home Remedies
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/11/16-Home-Remedies-To-Treat-Dehydration-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2018/02/How-To-Get-Rid-Of-A-Silverfish-Infestation-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2018/06/How-To-Get-Rid-Of-Milia-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2018/07/Blood-Clots-During-Period-%E2%80%93-Causes-And-Natural-Treatment-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/02/What-Is-A-Hypnic-Jerk-Causes-Symptoms-And-8-Tips-To-Cure-It-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/04/10-Best-Ways-To-Get-Rid-Of-Popping-Ears-Prevention-Tips-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Ingredients
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/04/Holy-Basil-Benefits-For-Your-Health-Skin-And-Hair-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/09/13-Surprising-Benefits-Of-Cottage-Cheese-That-Show-How-It-Is-Good-For-You-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2018/10/What-Is-Taurine-The-8-Incredible-Benefits-Side-Effects-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2018/11/What-Is-Glycemic-Index-List-Of-Common-Foods-With-Their-Glycemic-Index-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/11/Does-Coffee-Make-You-Gain-Weight-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/11/9-Best-Essential-Oils-To-Treat-Acne-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Nutrition
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/06/Foods-High-In-Copper-Why-You-Should-Include-Them-In-Your-Diet-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Top-30-Purine-Rich-Foods-To-Avoid-Or-Should-You-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/532-405732325.jpg-Crpd-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/12/971-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/313_348025892-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/03/847_10-Harmful-Effects-Of-Skipping-Breakfast-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <Button>Find more</Button>
            </div>
         </div>
         </div>
         <div className='dropdown'><h1>NEWS</h1>
         <div className='dropdown-content'>
            <div className='subh'>
            <h1 className='dropdown'>Collaboration
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2022/04/Brilliant-Ways-To-De-tan-And-Flaunt-Your-Glowing-Skin-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2022/06/henna-model-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2022/06/How-Henna-Has-Remained-An-Evergreen-Beauty-Ingredient-Through-The-Ages-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2022/06/Did-you-know-facial-bleach-has-emerged-as-a-great-alternative-to-threading-and-waxing-facial-hair-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2022/06/5-Reasons-To-Include-A-Face-Oil-In-Your-Beauty-Regime-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2022/06/How-to-treat-your-skin-after-a-holiday-1-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Women Empowerment
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/03/All-You-Need-To-Know-About-Matriarchy-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/04/All-You-Need-To-Know-About-Gender-Equity-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/05/The-Top-10-Jobs-Dominated-By-Women-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/03/35-Powerful-Women-Empowerment-Quotes-To-Inspire-You-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2020/02/15-Best-Womens-Day-Poems-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2020/02/21-Amazing-International-Womens-Day-Facts-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Relationship
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/07/11-Types-Of-Hugs-And-What-They-Mean-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/06/21-Ways-To-Surprise-Your-Boyfriend-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/06/101-Questions-To-Ask-Your-Crush-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2019/08/Signs-To-Tell-You-Have-Met-Your-Twin-Flame-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/11/How-To-Encourage-Someone-Not-To-Give-Up-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/11/Cute-Prom-Proposal-Ideas-To-Impress-Your-Beloved-Banner-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Discover
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/09/Only-3-Of-The-People-Have-The-Letter-X-On-Both-Their-Hands-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/06/163-I-Never-Imagined-That-Toothpaste-Could-Do-So-Many-Things-464549180-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2016/09/42-bra-tricks-you-dont-know-about-163942859-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2016/01/224-avoid-these-kissing-mistakes-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/07/269-10-Interesting-Facts-About-Sex-You-Probably-Did-Not-Know-is-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/09/Ways-To-Feel-More-Confident-During-Sex-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Brand News
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/10/Are-Body-Oils-Better-Than-Body-Lotions-How-to-Choose-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/02/MamaEarth-Babycare-Products-Review-Why-It-Is-A-Safe-Bet-For-Mothers-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2018/11/The-Perfect-Cosmetic-Surgery-Is-Just-a-Click-Away-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2018/11/Feast-Your-Five-Senses-At-The-Sulwha-Culture-Exhibition-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2018/11/We-Got-Our-Hands-On-The-Facial-Brush-That-Beauty-Experts-Are-Raving-About-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/09/Only-3-Of-The-People-Have-The-Letter-X-On-Both-Their-Hands-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Celebrity News
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/12/Top-15-Female-Sports-Celebrities-In-India-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/02/Sophia-Vergara%E2%80%99s-Beauty-Fitness-Secrets-REVEALED-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/02/1431-Revealed-Aishwarya-Rai%E2%80%99s-Weight-Loss-Success-Secrets-That-You-Can-Follow-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/12/Top-10-Celebrity-Business-Woman-in-India-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/08/Shilpa-Shetty%E2%80%99s-Makeup-And-Beauty-Secrets-Revealed-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/02/Top-10-Celebrity-Kids-In-India-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Inspiration
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/09/82-5-Creative-Ways-To-Shorten-Your-Hair-Without-Cutting-It-ss-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/7-Short-Hair-Cuts-You-Could-Try-Right-Now-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/05/taylor-swifts.1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/50-Hair-Color-Styles-For-You-To-Try-Out-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/5-Simple-Steps-To-Take-Care-Of-Your-Hair-Before-Marriage-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2015/02/Practice-These-9-Habits-Before-Going-To-Bed-And-See-Dramatic-Changes-In-Your-Beauty-3-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <h1 className='dropdown'>Fashion
                <div className='dropdown-content drop2'>
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2021/10/10-Best-Washable-Incontinence-Underwear-For-Women-In-2021-Banner-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2016/12/80-How-To-Wear-A-Saree-In-Different-Ways-489349552-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/01/13-20-Gorgeous-Party-Wear-Sarees-With-Blouse-Designs-For-2017-ss-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/05/1313-20-Best-Outfits-From-Manish-Malhotra%E2%80%99s-Bridal-Collection-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/06/Wedding-Color-Combinations-Ideas-1-267x300.jpg.webp" alt="" />
                    <img src="https://cdn2.stylecraze.com/wp-content/uploads/2017/12/Top-10-Plus-Size-Models-In-The-Worldd-267x300.jpg.webp" alt="" />
                </div>
                </h1>
                <Button>Find more</Button>
            </div>
         </div>
         </div>
         <h1 onClick={()=>{navig('/tools')}}>TOOLS</h1>
         <h1>PRODUCTS</h1>
         <h1>ABOUT US</h1>
        </div>
    </div>
    <div id='drop'></div>
    </div>
  )
}

export default Navbar