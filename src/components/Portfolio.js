import React from 'react';

export default function Portfolio({ resumeData }) {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {
              resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return(
                    <a href={item.projecturl} target="_blank" className="columns portfolio-item">
                      <div className="item-wrap">
                        <img src={`${item.imgurl}`} className="item-img"/>
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.date}</h5>
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}