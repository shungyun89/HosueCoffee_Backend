import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MemberAside from './memberAside';
import MemberBack from './memberBack';
import './memberFavorite.css'
import FavoriteCard from './FavoriteCard';
function MemberFavorite(){
    return(
        <>
             <MemberBack/>
            <div className="container">
        <div className="row">
        <MemberAside/>
        <main className="pMain col">
            <div className=" row justify-content-center">
                <FavoriteCard/>
                <FavoriteCard/>
                <FavoriteCard/>
                <FavoriteCard/>
                <FavoriteCard/>
                <FavoriteCard/>
                <FavoriteCard/>
                <FavoriteCard/>
                
            </div>

        </main>
        </div>
    </div>

        </>
    )
}
export default MemberFavorite;