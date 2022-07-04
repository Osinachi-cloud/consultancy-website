import React from 'react'
import  ReactCaroussel  from 'react-caroussel';
import ContactSectionTwo from '../home/contactSectTwo/ContactSectionTwo';
import CarouselCard from '../home/slider/CarouselCard';
import "./blog.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Blog = () => {
  return (
    <div>
        <div className="search-box-bg-image">
            <div className="search-box">
                    <div className="search-box-first-section">
                            <h1>Blog</h1>
                    </div>
                    <div className="search-box-second-section">
                        <div className="search-input-box">
                            <input type="text"/>
                            <SearchOutlinedIcon style={{fontSize:"40px", color:"grey"}}/>

                        </div>
                    </div>

                  
            </div>
        </div>
      
        <div className="blog">
        {/* <h1 className="blog-title">Blog</h1> */}

        <ReactCaroussel
          slidesToShow={2}
          slidesToScroll={1}
          // infinite={true}
          // autoplay={true}
          speed={2}
          display={{
            dots: false,
            arrows: true,
          }}
          style={{flexWrap:"wrap"}}
        >
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <CarouselCard key={index} index={index} />
            ))}
        </ReactCaroussel>
      </div>
      <ContactSectionTwo/>

     

    </div>
  )
}

export default Blog