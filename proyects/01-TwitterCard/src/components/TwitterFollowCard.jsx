import { useState } from "react"
import './TwitterFollowCard.css'

export function TwitterFollowCard ( {username, children, initialIsFollowing}) {

    const [isFollowing, setIsfollowing] = useState(initialIsFollowing)
    
    const classButton = (isFollowing) ? 'is-following' : "not-following"

    const setFollow = () => {setIsfollowing(!isFollowing)}

    return (
        <article  className='tw-followCard'>
            <header className='tw-followCard-header'>

                <img 
                    className='tw-followCard-img' 
                    src={`https://unavatar.io/github/${username}`} 
                    alt={`Picture from ${username}`} 
                />

                <div className='tw-followCard-info'>
                    
                    <strong>{children}</strong>
                    <span className='tw-followCard-user'>
                        @{username}
                    </span>

                </div>
            </header>
            <aside className='tw-followCard-aside' >
                <button  className={`tw-followCard-buttonFollow ${classButton}`} onClick={setFollow}>
                </button>
            </aside>
        </article>
    )
}