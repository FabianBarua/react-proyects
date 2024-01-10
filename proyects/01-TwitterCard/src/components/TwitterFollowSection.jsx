
import {TwitterFollowCard} from './TwitterFollowCard'
import './TwitterFollowSection.css'

export function TwitterFollowSection({users}) {


    return (
        <>
            <section className='tw-suggestions'>
                <h1 className='tw-follow-title'>A quién seguir</h1>
                
               {users.map((user) => {
                    const { username, name, isFollowing } = user;
                    return (
                        <TwitterFollowCard key={username} username={username} initialIsFollowing={isFollowing}> 
                            {name}
                        </TwitterFollowCard>
                    );
                })
                }
                
                <button className='tw-follow-showmore'>Mostrar más</button>
            </section>
        </>
    )
}