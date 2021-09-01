import user from '../../json/profile.json';
import { Profile } from 'components/Profile/Profile';

export const App = () => {
    return (
        <>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
            />
        </>
    )
}