import { imgs } from '../content/home';
import Slider from "react-slick";
import Nav from './Nav';
import React, {
    useState,
    useRef,
    useEffect
} from 'react';
import { TypeAnimation } from 'react-type-animation';
import FlipCard from './FlipCard';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

export default function Home() {
    const navbarHeight = useSelector(state => state.main.navHeight);
    const isTablet = useMediaQuery({ query: '(max-width: 992px)' });
    const [bannerTextHeights, setBannerTextHeights] = useState([]);
    const bannerTextRefs = useRef([]);

    const updateBannerTextHeights = () => {
        const heights = bannerTextRefs.current.map(ref => ref?.offsetHeight || 0);
        setBannerTextHeights(heights);
    };

    useEffect(() => {
        updateBannerTextHeights();  // Initial height update
    }, []);

    const settings = {
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: false,
        speed: (37*(50 * 2)) + 500,// Slide transition duration
        autoplaySpeed: (37*(50 * 2)) + 500,// Each slide will be shown for this amount of time before automatically transitioning to the next slide
        // not slidable by user, just auto
        draggable: false,
        swipe: false,
        arrows: false,
    };
    
    return (
        <section
            style={{ minHeight: '100vh' }}
            className='d-flex flex-column position-relative overflow-hidden'
        >
            <Nav isDashPage={false}/>
            <div
                className='container-xxl pb_12px px_36px d-flex flex-column justify-content-center minh-inherit'
                style={{ paddingTop: navbarHeight }}
            >
                <div className='row'>
                    <div className='col-lg-9'>
                        <div className='container-fluid px-0'>
                            <div className='row flex-md-row-reverse align-items-lg-center'>
                                <div className='col-lg-8'>
                                    <Slider {...settings}>
                                        {imgs.map((item, index) => (
                                            <div key={index}>
                                                <div>
                                                    <img
                                                        className='w-100 object-fit-cover object_top'
                                                        src={item.img}
                                                        alt={item.text}
                                                        style={{ height: isTablet ? `calc(100vh - ${navbarHeight + 24 + (bannerTextHeights[0] || 0)}px)` : '100%' }}
                                                    />
                                                </div>
                                                <div className="d-flex align-items-center position-absolute z_index_-1 hidden"
                                                    ref={el => bannerTextRefs.current[index] = el}>
                                                    <h4 className='c_darkBlue shadow_Tmain'>{item.text} <span className='c_main text-capitalize'>{item.highlited}</span></h4>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                                <div
                                    className='col-lg-4'
                                    style={{ height: `${bannerTextHeights[0]}px` }}
                                >
                                    <TypeAnimation
                                        sequence={[
                                            imgs[0].text, // text=
                                            imgs[0].delay,

                                            imgs[1].text, // text
                                            imgs[1].delay,

                                            imgs[2].text, // text
                                            (imgs[2].delay),

                                        ]}
                                        wrapper="h4"
                                        speed={50}
                                        repeat={0}
                                        className={`c_darkBlue shadow_Tmain ${isTablet && 'text-center'}`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {isTablet ?
                        ''
                        : (
                            <div className="login_form_container col-lg-3 d-lg-flex align-items-center">
                                <FlipCard />
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
}
