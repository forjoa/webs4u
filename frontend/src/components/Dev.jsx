import '../styles/Dev.css'

const Dev = ({ data }) => {

    return (
        <div className='dev'>
            <div className="card">
                <div className="tools">
                    <div className="circle">
                        <span className="red box"></span>
                    </div>
                    <div className="circle">
                        <span className="yellow box"></span>
                    </div>
                    <div className="circle">
                        <span className="green box"></span>
                    </div>
                </div>
                <div className="card_content">
                    <div className="profile-photo-container">
                        <img src={data.photo} />
                        <p>{data.name}</p>
                    </div>
                    <div className="info-container">
                        <span className='p-lang'>{data.programming_lang}</span>
                        <span>{data.email}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dev