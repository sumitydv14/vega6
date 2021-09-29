import React,{useState} from 'react';



import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const imagesG =
    {
        URL: 'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e13.png',
        URL2: 'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e14.png',
        URL3: 'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e15.png',
        URL4: 'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e16.png',
        URL5: 'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e17.png',

    }
   

    console.warn("---------" , imagesG)

  



function GalleryBox() {
    

    return (
        <section className="gallerybox-sec">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="gallery-part text-center">
                            <h1 className="m-0" >Gallery</h1>
                            <span></span>
                        </div>
                    </div>
                </div> 

   
                    <SimpleReactLightbox>
                        <SRLWrapper> 
                        <div class="images">
                            <div class="image1">
                                <img src={imagesG.URL}  alt="" className="img-fluid" style={{width: '200px', height:'381px'}}/>
                                <img src={imagesG.URL2} alt="" className="img-fluid" style={{width: '180px', height: '253px', marginTop: '125px', marginLeft: '23px'}}/>
                                <img src={imagesG.URL3} alt="" className="img-fluid" style={{width: '500px', height: '313px', marginTop:'65px',  marginLeft: '23px'}}/>
                            </div>
                            <br/>
                        <div class="image2">
                            <img src={imagesG.URL4} alt="" className="img-fluid" style={{width:'347px', height:'218px'}}/>
                            <img src={imagesG.URL5} alt="" className="img-fluid" style={{width:'364px', height:'230px',marginLeft:'23px'}}/>
                            <img src={imagesG.URL} alt="" className="img-fluid" style={{width:'173px', height:'160px',marginLeft:'23px'}}/>
                        </div>
                       </div>
                    </SRLWrapper>
                </SimpleReactLightbox>
                                

              


            </div>
        </section>
    )
  
  
}

export default GalleryBox;
