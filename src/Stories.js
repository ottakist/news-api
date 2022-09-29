import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const{data,isLoading,removeStory}=useGlobalContext()

    if(isLoading){
      return <div className="loading"></div>}
  return (<section className='stories'>
    {
     data.map((story)=>{
        const { author,num_comments,objectID,points,title,url } = story;
        // eslint-disable-next-line array-callback-return
        if(!title) return 

          return (
            <article className='story' key={objectID}>
              <h4>{title}</h4>
              <p className="info">{points} points by <span>{author} | </span> {num_comments}</p>
              <div > <a href={url} className='read-link' target='_blank' rel='noopener noreferrer'>readmore</a>
              <button className="remove-btn" onClick={()=>removeStory(objectID)}>remove</button>
              </div>
            </article>
          );
     })}
  </section>)
}

export default Stories
