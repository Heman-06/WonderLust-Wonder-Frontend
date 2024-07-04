import './UserPost.css'
import './Card.css'
import { Link } from 'react-router-dom';

const UserPost = ({ data }) => {


    return (
        <>
            <div className="up1">
                {data.map(post => (
                    <Link className='text-decoration-none' to={`/details/${post.id}`} key={post.id}>
                        <div className='crd1'>
                            <div className="crd2">
                                <div className='crdpic'>
                                    <img
                                        src={`data:image/${post.imageType};base64,${post.image}`}
                                        alt='Post'
                                    />
                                </div>
                                <div className='crd3'>
                                    <p>{post.type}</p>                         </div>
                                <div className='crd4'>
                                    <h4>{post.title}</h4>
                                </div>
                                <div className='crd5'>
                                    <div className='uimg'>
                                        <img
                                            src=""
                                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://up.yimg.com/ib/th?id=OIP.F7AAZ51YNslUUrejRKkDeQHaE1&pid=Api&rs=1&c=1&qlt=95&w=168&h=109'; }}
                                            alt=""
                                        />
                                    </div>
                                    <div style={{ fontWeight: "600" }}>
                                        :
                                    </div>
                                    <div className="uname">
                                        <p>{post.user.name}</p>
                                    </div>
                                    <div style={{ fontWeight: "600" }}>
                                        :
                                    </div>
                                    <div className="udate">
                                        <p>{new Date(post.createdDate).toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </>
    )
}

export default UserPost