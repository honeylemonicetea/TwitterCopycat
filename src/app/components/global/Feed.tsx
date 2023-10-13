import React from 'react'
import Image from 'next/image'
import './Feed.css'
import kitty from '../../../../public/placeholders/kitty.jpg'
import Tweet from '../reusable/Tweet'
type Props = {}

const Feed = (props: Props) => {
  return (
    <div className='feed'>
        <div className="feed__header">
            feed header
        </div>
        <div className="feed-container">
            the tweets go here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit ratione iusto inventore earum, rerum quis itaque incidunt natus ullam totam. Adipisci, aspernatur? Hic saepe laboriosam totam beatae cumque corrupti magni tempore ratione dignissimos, sapiente aliquid rem nulla, numquam ab dolorem in veniam, nam quas. Vitae nisi doloribus, beatae voluptate, facere nihil sed aspernatur consectetur harum labore saepe ut omnis necessitatibus, perspiciatis quidem. Quisquam veniam vero minus nihil provident iure praesentium repellendus nemo saepe iste officiis ipsum, quo molestias eaque soluta ad sit deleniti incidunt dolore quos. Consequuntur, suscipit minima praesentium pariatur nisi assumenda officia illo repudiandae voluptatum exercitationem in ipsum. Dignissimos magni tempore illo nihil quae voluptatibus id eos assumenda esse omnis, voluptatem architecto, similique eveniet quaerat facilis explicabo temporibus aliquam, mollitia ab! Nobis labore quis maiores itaque, officiis eum sunt necessitatibus nemo, voluptatibus accusamus illum velit pariatur facere vero delectus et praesentium possimus! Suscipit velit in quod non ducimus assumenda quaerat molestiae repellendus qui facere aut accusantium animi est deleniti minus id, consequuntur illum soluta. Optio debitis quaerat reprehenderit repellendus iste quis quidem. Ea error animi nisi consequuntur. Facere eos suscipit inventore ratione aspernatur voluptatibus quas sequi temporibus, dolores, magni doloribus nostrum omnis soluta? Veritatis optio sit numquam amet.
            <Image
              src={kitty}
              width={400}
              height={100}
              alt=''
             />
             <Tweet/>
             <Tweet/>
        </div>
    </div>
  )
}

export default Feed