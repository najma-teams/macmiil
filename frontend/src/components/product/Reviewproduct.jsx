import React, { useState } from "react";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Reviewproduct = () => {
    const [reviewShow, setReviewShow] = useState(true);
  return (
  <>

  <ul className={`review-nav   lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
    <li className="desc  " onClick={() => setReviewShow(!reviewShow)}>Description</li>
    <li className="rev  " onClick={() => setReviewShow(!reviewShow)}>Reviews 4</li>
  </ul>



  {/* desc & review content */}
  <div className={`review-content ${reviewShow ? "review-content-show":"description-show"}`}>
    <div className="review-showing  ">
        <ul className="content lab-ul ">
            {
                ReviewList.map((review,i) =>(
                    <li key={i} className="">
                        <div className="post-thumb  ">
                            <img src={review.imgUrl} alt="" />
                        </div>
                        <div className="post-content">
                            <div className="entry-meta">
                                <div className="posted-on ">
                                    <a href="#">{review.name}</a>
                                    <p>{review.date}</p>
                                </div>
                            </div>
                            <div className="entry-content">
                                <p>{review.desc}</p>
                            </div>
                        </div>

                    </li>
                ))
            }
        </ul>


        {/* add review field */}
        <div className=" client-review">
            <div className="review-form">
                <div className="review-title">
                    <h5>Add a Review</h5>
                </div>


                <form action="action" className="row">
                  <div className=" col-md-4 col-12">
                    <input type="text" name="name" id="name" placeholder="Full Name *" />
                  </div>

                  <div className=" col-md-4 col-12">
                    <input type="email" name="email" id="email" placeholder="Your Email *" />
                  </div>

                  <div className=" col-md-4 col-12">
                    <div className="rating">
                      <span className="me-2">Your rating</span>
                      <p className='rating '>
                <i className='icofont-star text-yellow-500'></i>
                <i className='icofont-star text-yellow-500'></i>
                <i className='icofont-star text-yellow-500'></i>
                <i className='icofont-star text-yellow-500'></i>
                <i className='icofont-star text-yellow-500'></i>
            </p>
                    </div>
                  </div>
                  <div className=" col-md-12 col-12">
                      <textarea name="message" id="message"  rows="8" placeholder="Type Here Message"></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className='default-button'> <span>Submit Review</span></button>
                  </div>
                </form>
            </div>
        </div>
    </div>


    {/* description */}

    <div className="description">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error illum, deleniti quas non, minus voluptas consectetur autem itaque reprehenderit provident et. Odio autem expedita qui ipsam quis illo reprehenderit pariatur optio eum facilis distinctio inventore est, possimus minima voluptatum deleniti? Doloribus quia tempora neque saepe accusamus sunt soluta consectetur quos vero nulla. Laborum, mollitia magnam laboriosam maiores itaque quaerat, perspiciatis aliquam debitis illo unde magni iure ullam, labore accusamus tempora quam fuga ipsum porro aspernatur. Iure non dolore, alias officiis quae impedit quo, quia, deleniti iusto consequatur atque. Cupiditate repellat quod sunt consequuntur ipsam dolorem totam non, accusantium porro dolor?</p>

      <div className="post-item">
        <div className="post-thumb">
          
              <img src="/src/assets/images/shop/01.jpg" alt="" />
        </div>
        <div className="post-content">
          <ul className="lab-ul">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia.</li> 
             <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia.</li> 
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia.</li> 
               <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia.</li> 
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia.</li> 
                 <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia.</li>

          </ul>
        </div>
      </div>
    </div>
  </div>
  </>
  )
};

export default Reviewproduct;

