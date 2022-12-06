import React from "react";
const ShowSummaryItem = ({post}) => {
    
 return(
    <div>
        <div className="list-group-item">
              <div className="row">
                  <div className="col-11">
                      <img src={`/images/${post.image}`} className="rounded-circle" width={50} height={50}
                      alt=""/>
                  </div>
                  <div className="col-10">
                      <div className="text-secondary">{post.username}</div>
                      <i className="fa fa-circle-check fa-inverse"></i><br/>
                      <span className="fw-bolder">{post.content}</span>
                  </div>
              </div>
              <div className="row mt-3">
                      <img src={`/images/${post.cardImage}`} className="fluid" alt=""/>
                          <h5 className="card-title">{post.cardTitle}</h5>
                          <p className="card-text">{post.cardBody}</p>
  
              </div>
              <div className="row mt-2">
                  <div className="col-3">
                      <p className="post-location">&nbsp;{post.location}</p>
                  </div>
                  <div className="col-3">
                      <p className='post-city'>&nbsp;{post.city}</p>
                  </div>
                  <div className="col-3">
                      <p className='post-tickets'>&nbsp;{post.tickets_left}</p>
                  </div>
                  <div className="col-3">
                      <p className='post-date'>&nbsp;{post.date}</p>
                  </div>
              </div>
          </div>
     </div>     
 );
};
export default ShowSummaryItem;