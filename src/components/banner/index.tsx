import React, { useEffect } from "react";
import { useState } from "react";
import './index.css'


const Banner = ()=> {

    const [bannerList, setBannerList] = useState<any>([])

    useEffect(() => {
      setBannerList([{
        id:1,
        url:'https://img.166.net/gameyw-misc/opd/squash/20230818/145410-urwzc1nyts.png'
      },
      {
        id:3,
        url:'https://img.166.net/gameyw-misc/opd/squash/20221209/162247-9dp0i1ehzo.png'
      }
    ])
    }, [])
    
  
    return (
      <div className="banner">
        {
          bannerList&&bannerList.map((item:any)=>(
            <img src={item?.url} className="banner-item" alt=''></img>
          ))
        }
      </div>
    );
  }
  
  export default Banner;