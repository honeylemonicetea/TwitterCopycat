import React from 'react'

type Props = {}

function RightSideBar({}: Props) {
  return (
    <aside className='right-sidebar'>
        <div className="right-sidebar__container">
            <input type="text" className='right-sidebar__searchbox' />
            <div className="right-sidebar__trends">
                <h2>Trends</h2>
                
            </div>
        </div>
    </aside>
  )
}

export default RightSideBar