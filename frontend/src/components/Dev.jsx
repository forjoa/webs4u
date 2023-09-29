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
                    <p>{data.name}</p>
                    <span>{data.email}</span>
                </div>
            </div>
        </div>
    )
}

export default Dev