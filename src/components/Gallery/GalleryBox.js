import React,{useState} from 'react';



import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const imagesG =
   {
    URL:'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e13.png',
       URL2:'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e14.png',
       URL3:'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e15.png',
       URL4:'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e16.png',
       URL5:'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e17.png',
       URL6:'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e1.png',
       URL7:'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e2.png',
      URL8:'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e3.png',
      URL9:'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e4.png',
      URL10:'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e5.png',
      URL11:'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e6.png',
      URL12:'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e7.png',
      URL13:'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e8.png',
      URL14:'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e10.png',
      URL15:'https://vega6.s3.us-west-2.amazonaws.com/office_pics/e11.JPG',
      URL16:'https://vega6.s3.us-west-2.amazonaws.com/office_pics/bd.png',
      URL17:'https://vega6.s3.us-west-2.amazonaws.com/office_pics/bd2.jpg',
      URL18:'https://vega6.s3.us-west-2.amazonaws.com/office_pics/bd3.jpg',

   }
   

   

  



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
                         <div class="row mt-5">
                      
                             {/* {
                                 imagesG.map(item =>{
                                     console.warn(item);
                                     return(
                                         <div className="column">
                                         <img src={item} className="img-fluid" alt="event"/>
                                        </div>
                                     )

                                 })
                             }
                        */}
           

                        <div class="column">
                            <img src={imagesG.URL16} alt="" className="img-fluid" />
                            <img src={imagesG.URL17} alt="" className="img-fluid" />
                            <img src={imagesG.URL18} alt="" className="img-fluid" />
                            <img src={imagesG.URL13} alt="" className="img-fluid" />
                            <img src={imagesG.URL14} alt="" className="img-fluid" />
                            
                        </div>
                            <div class="column">
                                <img src={imagesG.URL}  alt="" className="img-fluid" />
                                <img src={imagesG.URL2} alt="" className="img-fluid" />
                                <img src={imagesG.URL3} alt="" className="img-fluid" />
                                <img src={imagesG.URL10}  alt="" className="img-fluid" />
                                <img src={imagesG.URL15} alt="" className="img-fluid" />

                            </div>
                         
                        <div class="column">
                            <img src={imagesG.URL4} alt="" className="img-fluid" />
                            <img src={imagesG.URL5} alt="" className="img-fluid" />
                            <img src={imagesG.URL6} alt="" className="img-fluid" />
                            <img src={imagesG.URL7} alt="" className="img-fluid" />
                           

                        </div>
                        <div className="column">
                                <img src={imagesG.URL11} alt="" className="img-fluid" />
                                <img src={imagesG.URL12} alt="" className="img-fluid" />
                                <img src={imagesG.URL9} alt="" className="img-fluid" />
                                <img src={imagesG.URL8} alt="" className="img-fluid" />
                        </div>
                    
                       

                       </div>
                    </SRLWrapper>
                </SimpleReactLightbox>
                                

              


            </div>
        </section>
    )
  
  
}

export default GalleryBox;
