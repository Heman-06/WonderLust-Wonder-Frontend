import './Posts.css'
import Card from './Card'
import { useNavigate } from 'react-router-dom'

const Posts = () => {

    const go = useNavigate();

    const goo = () => {
        go('/trendings');
    }

    const category = 'all';
    const sortBy = 'date'

    return (
        <>
            <div className='container pst0'>
                <div className="pst00">
                    <p className='h4'>Latest Posts -:</p>
                    <hr className='hr' />
                </div>
                <div className="pst1">
                    <div className='pst2'>
                        <Card category={category} sortBy={sortBy} />
                    </div>
                    <button onClick={goo}>View All Posts</button>
                </div>
            </div>
        </>
    )
}

export default Posts